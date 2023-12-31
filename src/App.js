import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      deck: [],
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
    };
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const obj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((prev) => ({ deck: [...prev.deck, obj] }));
    if (cardTrunfo) this.setState({ hasTrunfo: true });
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  saveBtnValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const sumLimit = 210;
    const unitLimit = 90;
    const parsed1 = parseInt((cardAttr1), 10);
    const parsed2 = parseInt((cardAttr2), 10);
    const parsed3 = parseInt((cardAttr3), 10);
    const validTextInput = cardName && cardDescription && cardImage && cardRare;
    const validAttribute = parsed1 + parsed2 + parsed3 <= sumLimit;
    const validAttr1 = parsed1 >= 0 && parsed1 <= unitLimit;
    const validAttr2 = parsed2 >= 0 && parsed2 <= unitLimit;
    const validAttr3 = parsed3 >= 0 && parsed3 <= unitLimit;
    const validation1 = validTextInput && validAttribute;
    const validation2 = validAttr1 && validAttr2 && validAttr3;
    return !(validation1 && validation2);
  };

  deleteCard = ({ target }) => {
    const { id } = target;
    const { deck } = this.state;
    const removedCard = deck.splice(id, 1);
    if (removedCard[0].cardTrunfo) {
      this.setState({ deck, hasTrunfo: false });
    } else {
      this.setState({ deck });
    }
  };

  cardList = (deck) => {
    const { nameFilter, rareFilter, trunfoFilter } = this.state;
    if (trunfoFilter) {
      const trunfoCard = deck.find((card) => card.cardTrunfo === true);
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      } = trunfoCard;
      return (
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      );
    }
    const output = deck.map((card, index) => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      } = card;
      const hasName = cardName.includes(nameFilter);
      let hasRarity = false;
      switch (rareFilter) {
      case 'todas':
        hasRarity = true;
        break;
      case 'normal':
        hasRarity = cardRare.includes(rareFilter);
        break;
      case 'raro':
        hasRarity = rareFilter.includes(cardRare);
        break;
      case 'muito raro':
        hasRarity = cardRare.includes(rareFilter);
        break;
      default:
        break;
      }
      if (!hasName || !hasRarity) {
        return;
      }
      return (
        <div key={ index }>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          <button id={ index } data-testid="delete-button" onClick={ this.deleteCard }>
            Excluir
          </button>
        </div>
      );
    });
    return output;
  };

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
      deck,
      nameFilter,
      rareFilter,
      trunfoFilter,
    } = this.state;
    const isSaveButtonDisabled = this.saveBtnValidation();

    return (
      <main>
        <h1>Tryunfo</h1>
        <div>
          <Header
            deck={ deck }
            nameFilter={ nameFilter }
            rareFilter={ rareFilter }
            trunfoFilter={ trunfoFilter }
            onInputChange={ this.onInputChange }
            cardList={ this.cardList }
          />
          <section>
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </section>
        </div>
        <div>{ deck ? this.cardList(deck) : <p /> }</div>
      </main>
    );
  }
}

export default App;
