import * as React from 'react';

interface ISavingRateProps {
    currentExpense: string;
    postTaxIncome: string;
}

interface ISavingRateState {
    currentExpense: number;
    postTaxIncome: number;
}

class SavingRate extends React.Component<ISavingRateProps, ISavingRateState> {
/*
    private static getDerivedStateFromProps(nextProps : ISavingRateProps, prevState : ISavingRateState) {
        return {
        postTaxIncome: parseInt(nextProps.postTaxIncome, 10),
        currentExpense: parseInt(nextProps.currentExpense, 10)
          }
      }
*/
  constructor(props : ISavingRateProps) {
    super(props)

    this.state = {
      currentExpense: parseInt(this.props.currentExpense, 10),
      postTaxIncome: parseInt(this.props.postTaxIncome, 10),
    }
  }

 

  public render() {
    const isValidSavingRate = (this.state.postTaxIncome >= this.state.currentExpense);

    let userMessage;
    if (isValidSavingRate) {
      userMessage = <span><h2>Votre taux d'épargne: {(Math.round((this.state.postTaxIncome - this.state.currentExpense) / (this.state.postTaxIncome) * 100) + '%')}</h2></span>
    } else {
      userMessage = <span><h2>Taux d'épargne invalide!</h2></span>
    }

    return <div><pre>{userMessage}</pre></div>
  }
}

export default SavingRate;