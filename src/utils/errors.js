import { Dialog, Notify  } from 'quasar'

const dangerMessage = (message, title = 'PRECAUCIÓN') => {
  Dialog.create({
    title: `<span style="color: #F56C6C"><i class="fas fa-exclamation-circle"></i> ${title}</span>`,
    message: message,
    color: 'negative',
    html: true
  })
}

const errors = err => {
  console.dir(err);
  if (!err.response) return;
  let { response } = err;
  let { status, data } = response;
  switch (status) {
    case 402:
        Notify.create({
          color: "negative",
          message: data.message
        });
      break;
    case 400:
      dangerMessage(data.message, "¡ATENCIÓN!");
      break;

    default:
      dangerMessage("Hubo un error al procesar su solicitud", "¡ALERTA!");
      break;
  }
};

export default {errors};
