import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addReserveSucess, updateAmountSucess } from './actions';
 

function* addToReserve({id}){
  const tripExist = yield select(
    state => state.reserve.find(trip => trip.id === id)
  );

  const myStock = yield call(api.get, `stock/${id}`);

  const stockAmount = myStock.data.amount;

  const currentStock = tripExist ? tripExist.amount : 0;

  const amount = currentStock + 1;

  if(amount > stockAmount){
    alert('Quatidade máxima atingida.');
    return;
  }

  if(tripExist){
    const amount = tripExist.amount + 1;

    yield put(updateAmountSucess(id, amount));

  }else{
    const response  = yield call(api.get, `trips/${ id }` )
    const data = {
      ...response.data,
      amount: 1,
    }
  
    yield put(addReserveSucess(data))
  }

}

function* updateAmount({ id, amount }){
  if(amount <= 0) return;

  const myStock = yield call(api.get, `stock/${id}`);

  const stockAmount = myStock.data.amount;

  if(amount > stockAmount){
    alert("quantidade excedida !!!");
    return;
  }

  yield put(updateAmountSucess(id, amount));
}

export default all([
  takeLatest('ADD_RESERVE_REQUEST', addToReserve),
  takeLatest('UPDATE_RESERVE_REQUEST', updateAmount),
])