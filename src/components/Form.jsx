import { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="card-name">
          Nome
          <input
            type="text"
            name=""
            id="card-name"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attribute1">
          Atributo 01
          <input
            type="number"
            name="attribute1"
            id="attribute1"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attribute2">
          Atributo 02
          <input
            type="number"
            name="attribute2"
            id="attribute2"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attribute3">
          Atributo 03
          <input
            type="number"
            name="attribute3"
            id="attribute3"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="card-image">
          Imagem
          <input
            type="text"
            name="card-image"
            id="card-image"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rarity">
          Raridade
          <select name="rarity" id="rarity" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          Super Trybe Trunfo
          <input
            type="checkbox"
            name="trunfo"
            id="trunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button data-testid="save-button">Salvar</button>
      </fieldset>
    );
  }
}

export default Form;
