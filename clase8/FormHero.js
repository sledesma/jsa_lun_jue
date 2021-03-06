function FormHero({ formulario, validations, onSubmit }) {
	this.formElement = document.querySelector(formulario);

	this.isValid = false;

	this.fields = validations.map(function ({ selector, validations }) {
		return {
			selector,
      validations,
			dom: document.querySelector(selector),
			isValid: false,
		};
	});

	this.registerFormListener = function () {
		this.formElement.addEventListener("submit", (e) => {
			
      this.isValid = true;

      const invalid = 
        this.fields.find(val => {
          return val.isValid === false
        })
      
      if(invalid)
        this.isValid = false;

      for (const f in this.fields) {
        if(f.isValid === false)
          this.isValid = false;
      }

			onSubmit(this.isValid, e);
		});
	};

  this.validate = function({ filter, field }) {
    switch(filter.type) {
      case 'required':
        field.isValid = field.dom.value != ''
        break;

      case 'min':
        field.isValid = field.dom.value.length >= filter.params
        break;
    }
  }

	this.registerValidations = function () {
    this.fields.forEach(f => {
      f.validations.forEach(val => {
        f.dom.addEventListener(val.on, (e) => {
          this.validate({
            filter: val.filter,
            field: f
          });

          console.log(this.fields);
        });
      });
    });
  };

	// Iniciar FormHero
	this.registerFormListener();
	this.registerValidations();
}

// POO

// 1. Basada en clases
// 2. Basada en prototipos

// ¿Cómo creo un nuevo objeto?
// 1. A través de una receta teórica llamada clase
// 2. A través de otro objeto

/*
(nombre, apellido)
Sebastian, Ledesma

(nombre, apellido, email)

information_schema => TABLA CON TODAS LAS REGLAS Y RESTRICCIONES
*/
