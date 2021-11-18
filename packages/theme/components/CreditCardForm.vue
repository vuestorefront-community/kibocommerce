<template>
  <div>
    <form class="card-form" @submit="handleFormSubmit">
      <div class="card-input">
        <label for="cardNumber" class="card-input-label"> Card Number </label>
        <input
          v-model="formData.cardNumber"
          autofocus
          id="cardNumber"
          class="card-input-text"
          autocomplete="off"
          required
          @keypress="validateNumber"
        />
      </div>

      <div class="card-input" v-if="formData.cardType !== undefined">
        <label for="credit-cardType" class="card-input-label">
          Credit Card Type
        </label>
        <input :value="formData.cardType" disabled />
      </div>

      <div class="card-input">
        <label for="cardholderName" class="card-input-label">
          Name on card
        </label>
        <input
          id="cardholderName"
          class="card-input-text"
          v-model="formData.cardholderName"
          autocomplete="off"
          required
        />
      </div>

      <div class="card-input">
        <div class="card-input-group">
          <label for="expireMonth" class="card-input-label">
            Expiry Date
          </label>
          <select id="expireMonth" v-model="formData.expireMonth" required>
            <option value="" disabled selected>Month</option>
            <option v-for="month in 12" :key="month">{{ month }}</option>
          </select>
          <select id="expireYear" v-model="formData.expireYear" required>
            <option value="" disabled selected>Year</option>
            <option
              v-for="(n, $index) in 12"
              :value="$index + formData.currentYear"
              :key="n"
            >
              {{ $index + formData.currentYear }}
            </option>
          </select>
        </div>
      </div>

      <div class="card-input">
        <div class="card-input-group">
          <label for="cvv" class="card-input-label">
            Security Code (CVV2)
          </label>
          <input
            id="cvv"
            class="card-input-text"
            v-model="formData.cvv"
            minlength="3"
            maxlength="3"
            autocomplete="off"
            required
            @keypress="validateNumber"
          />
        </div>
      </div>

      <div v-if="this.formData.errors.length">
        <div
          class="validation-errors"
          v-for="error in this.formData.errors"
          :key="error"
        >
          {{ error }}
        </div>
      </div>
      <div v-if="this.formData.success && !this.formData.errors.length">
        <div class="validation-success">Credit Card saved successfully.</div>
      </div>
      <button
        type="submit"
        class="sf-button color-secondary creditcard-save-btn"
      >
        Save Credit Card
      </button>
    </form>
  </div>
</template>

<script>
import creditCardType from 'credit-card-type';

export default {
  name: 'CreditCardForm',
  props: ['parentFormData'],
  data() {
    return {
      setErrorFlag: false,
      formData: {
        cardholderName: '',
        cardNumber: '',
        cardType: '',
        expireMonth: '',
        expireYear: '',
        cvv: '',
        currentYear: new Date().getFullYear(),
        errors: [],
        success: false
      }
    };
  },
  methods: {
    getCCType(ccardNumber) {
      const ccardType = creditCardType(`${ccardNumber}`);
      if (ccardType.length) {
        this.formData.cardType = ccardType[0].type.toUpperCase();
      }
    },

    validateNumber(event) {
      const keyCode = event.keyCode;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },

    validateCreditCard(value) {
      // Accept only digits, dashes or spaces
      if (/[^0-9-\s]+/.test(value)) return false;

      // The Luhn Algorithm. It's so pretty.
      let nCheck = 0;
      let bEven = false;
      value = value.replace(/\D/g, '');

      for (let n = value.length - 1; n >= 0; n--) {
        const cDigit = value.charAt(n);
        let nDigit = parseInt(cDigit, 10);

        if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

        nCheck += nDigit;
        bEven = !bEven;
      }

      if (nCheck % 10 === 0) {
        this.getCCType(this.formData.cardNumber);
        return true;
      } else {
        this.formData.errors.push('Credit Card Number is invalid');
        return false;
      }
    },

    validateCardExpiry() {
      // logic to validate the cc
      const currentDate = new Date();
      const someDay = new Date();

      someDay.setFullYear(
        this.formData.expireYear,
        this.formData.expireMonth,
        1
      );

      if (someDay > currentDate) {
        return true;
      } else {
        this.formData.errors.push('Expiry date is not valid');
        return false;
      }
    },
    handleFormSubmit(event) {
      event.preventDefault();
      this.formData.errors = [];

      const ccNumberValid = this.validateCreditCard(this.formData.cardNumber);
      const cardExpDateValid = this.validateCardExpiry();

      if (ccNumberValid && cardExpDateValid) {
        this.formData.success = true;
        this.$emit('handleCCFormValidation', this.formData);
      }
    }
  }
};
</script>

<style scoped>
.card-input {
  margin-bottom: 10px;
}
.card-input label {
  /* background: lime; */
  width: 200px;
  padding-right: 10px;
  text-align: right;
  display: inline-block;
}
.card-input label:after {
  content: ':';
  display: inline-block;
}
.card-input input,
.card-input select {
  padding: 10px;
}
.card-input input {
  width: 200px;
}
.card-input select {
  width: 105px;
  margin-left: 0;
}
.card-input select + select {
  margin-left: 10px;
}
.validation-errors {
  padding: 10px;
  margin-bottom: 10px;
  color: #ce5e5e;
  background: #ffe5e5;
  border: 1px solid #ce5e5e;
}
.sf-button.color-secondary.creditcard-save-btn {
  margin: 10px 0 0 215px;
}
.validation-success {
  padding: 10px;
  margin-bottom: 10px;
  color: #5ece76;
  background: #e5ffe5;
  border: 1px solid #5ece76;
}
@media (max-width: 485px) {
  .card-input {
    margin-bottom: 20px;
  }
  .card-input label {
    text-align: left;
    display: block;
    margin-bottom: 5px;
  }
  .sf-button.color-secondary.creditcard-save-btn {
    display: inline-block;
    width: auto;
    margin-left: 0;
  }
}
@media (max-width: 768px) {
  .sf-button.color-secondary.creditcard-save-btn {
    margin-left: 0;
  }
}
</style>
