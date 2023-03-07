import { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  setFilter = (event) => {
    const {
      deck,
    } = this.props;
    const {
      cardList,
      onInputChange,
    } = this.props;
    onInputChange(event);
    cardList(deck);
  };

  setTrunfo = (event) => {
    const {
      deck,
    } = this.props;
    const {
      cardList,
      onInputChange,
    } = this.props;
    onInputChange(event);
    cardList(deck);
  };

  render() {
    const {
      nameFilter,
      rareFilter,
      trunfoFilter,
    } = this.props;
    return (
      <section>
        <label htmlFor="nameFilter">
          Procurar por Nome
          <input
            type="text"
            name="nameFilter"
            id="nameFilter"
            disabled={ trunfoFilter }
            value={ nameFilter }
            onChange={ this.setFilter }
            data-testid="name-filter"
          />
        </label>
        <label htmlFor="rareFilter">
          Procurar por Raridade
          <select
            name="rareFilter"
            id="rareFilter"
            disabled={ trunfoFilter }
            value={ rareFilter }
            onChange={ this.setFilter }
            data-testid="rare-filter"
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          Super Trunfo
          <input
            type="checkbox"
            name="trunfoFilter"
            id="trunfoFilter"
            checked={ trunfoFilter }
            onChange={ this.setTrunfo }
            data-testid="trunfo-filter"
          />
        </label>
      </section>
    );
  }
}

export default Header;

Header.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  deck: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string.isRequired,
      cardDescription: PropTypes.string.isRequired,
      cardAttr1: PropTypes.string.isRequired,
      cardAttr2: PropTypes.string.isRequired,
      cardAttr3: PropTypes.string.isRequired,
      cardImage: PropTypes.string.isRequired,
      cardRare: PropTypes.string.isRequired,
      cardTrunfo: PropTypes.bool.isRequired,
    }).isRequired,
  ).isRequired,
  cardList: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
