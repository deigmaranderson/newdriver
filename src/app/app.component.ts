import { AfterViewChecked, Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ViacepService, Endereco, CepError } from '@brunoc/ngx-viacep';
import { Indicante } from './models/indicante';
import { HttpClient } from '@angular/common/http';
import { IndicanteService } from './services/indicante.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';
  rForm: FormGroup;
  post: any;  // A property for our submitted form
  description: string;
  name: string;
  validate: boolean = false;
  enderecoCompleto: Indicante;
  states = [];

  constructor(private fb: FormBuilder,
    private viacep: ViacepService,
    private indicanteService: IndicanteService) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'endereco': [null, Validators.required],
      'numero': [null, Validators.required],
      'cidade': [null, Validators.required],
      'uf': [null, Validators.required],
      'complemento': [null, Validators.required],
      'cep': [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(9)])],
      'email': ['', [Validators.required, Validators.email]],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      'validate': ''
    });

  }
  addPost(post) {
    this.description = post.description;
    this.name = post.name;
  }

  getErrorMessage(type: string) {
    let erros: string;
    switch (type) {
      case 'email':
        erros = this.rForm.get('email').hasError('required') ? 'Você deve digitar um e-mail válido' :
          this.rForm.get('email').hasError('email') ? 'e-mail inválido' : '';
        break;
      case 'cep':
        erros = this.rForm.get('cep').hasError('required') ? 'Você deve digitar um CEP' :
          this.rForm.get('cep').invalid ? 'Você deve digitar um CEP válido' : '';

        break;
      default:
        break;
    }

    return erros;

  }

  ngOnInit() {
    this.allStates();
  }

  public setForm(enderecoCompleto) {
    if (enderecoCompleto.erro) {
      this.rForm.get('cep').setErrors({ 'incorrect': true });
      this.getErrorMessage('cep');
      return false;
    };
    this.rForm.patchValue({ cep: enderecoCompleto.cep });
    this.rForm.patchValue({ endereco: enderecoCompleto.logradouro });
    this.rForm.patchValue({ complemento: enderecoCompleto.complemento });
    this.rForm.patchValue({ cidade: enderecoCompleto.localidade });
    this.rForm.patchValue({ uf: enderecoCompleto.uf });
  }

  public resetForm() {
    this.rForm.patchValue({ endereco: '' });
    this.rForm.patchValue({ complemento: '' });
    this.rForm.patchValue({ cidade: '' });
    this.rForm.patchValue({ uf: '' });
  }

  public loadingFormData() {
    this.rForm.patchValue({ endereco: '...' });
    this.rForm.patchValue({ complemento: '...' });
    this.rForm.patchValue({ cidade: '...' });
    this.rForm.patchValue({ uf: '...' });
  }

  public valueChange(event) {
    if (this.rForm.get('cep').valid) {
      this.buscaCep(this.rForm.get('cep').value);
    } else {
      this.resetForm();
    }
  }

  public allStates() {
    this.indicanteService.getStates().subscribe(
      listStates => this.states = listStates
    );
  }

  public buscaCep(cep) {
    this.loadingFormData();
    this.viacep.buscarPorCep(cep).then((endereco: Endereco) => {
      // Endereço retornado :)
      this.enderecoCompleto = <Indicante>endereco;
      if (this.enderecoCompleto.logradouro === undefined) {
        this.rForm.get('cep').setErrors({ 'invalid': true });
        this.getErrorMessage('cep');
        return false;
      } else {
        this.setForm(<Indicante>endereco);
      }
    }).catch((error: CepError) => {
      // Alguma coisa deu errado :/
      this.rForm.get('cep').setErrors({ 'invalid': true });
      this.getErrorMessage('cep');
    });
  }


}

