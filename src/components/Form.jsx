import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    } = this.props;
    const {
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <fieldset>
        <legend>Formulário Super Tryunfo</legend>
        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            cols="30"
            rows="10"
            name="cardDescription"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
          />
        </label>
        <label htmlFor="cardAttr1">
          Atributo 01
          <input
            type="number"
            name="cardAttr1"
            id="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="cardAttr2">
          Atributo 02
          <input
            type="number"
            name="cardAttr2"
            id="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="cardAttr3">
          Atributo 03
          <input
            type="number"
            name="cardAttr3"
            id="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="card-image">
          Imagem
          <input
            type="text"
            name="cardImage"
            id="card-image"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select
            name="cardRare"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          Super Trybe Trunfo
          <input
            type="checkbox"
            name="cardTrunfo"
            id="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
        </label>
        <button
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </fieldset>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
