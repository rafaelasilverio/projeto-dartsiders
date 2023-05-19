import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formulario!: FormGroup;
  email: string = '';
  senha: string = '';
  
  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void{
    this.formulario = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      senha: ['', [Validators.required]]//validar quantidade de caracteres
    })
  }

  onSubmit() {
    if(this.formulario.valid){
      this.email = this.formulario.get('email')?.value;
      this.senha = this.formulario.get('senha')?.value;
      console.log('Usuário: ' + this.email);
      console.log('Senha: ' + this.senha);
    }
  }

  habilitarBotao(): string{
    if (!this.formulario.valid){
      return 'botao__desabilitado';
    } else {
      return 'botao';
    }
  }

}
