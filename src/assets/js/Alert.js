import swal from 'sweetalert';

class Alert {
  constructor() {
    this.title = 'ERROR!';
    this.text = 'Aqui vem um alerta de error.';
  }

  error() {
    swal({
      title: this.title,
      text: this.text,
      type: 'error',
      confirmButtonText: 'OK',
    });
  }
}

export default Alert;
