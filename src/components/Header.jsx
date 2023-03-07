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

  render() {
    const {
      nameFilter,
      rareFilter,
    } = this.props;
    return (
      <section>
        <label htmlFor="nameFilter">
          Procurar por Nome
          <input
            type="text"
            name="nameFilter"
            id="nameFilter"
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
      </section>
    );
  }
}

export default Header;

Header.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
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
