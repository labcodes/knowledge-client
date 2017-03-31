import swal from 'sweetalert';

class Alert {
  constructor() {
    this.title = 'ERROR!';
    this.text = 'Aqui vem um alerta de error.';
  }

  error() {
    this.alertType = 'error';
    this.display();
  }

  success() {
    this.alertType = 'success';
    this.display();
  }

  warning() {
    this.alertType = 'warning';
    this.display();
  }

  display() {
    swal({
      title: this.title,
      text: this.text,
      type: this.alertType,
      confirmButtonText: 'OK',
    });
  }
}

export default Alert;
