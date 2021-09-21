import clearDom from '../helpers/data/clearDom';

const buttons = (displayName) => {
  clearDom();
  document.querySelector('#store').innerHTML = `
  Welcome ${displayName}!
   <button type="button" id = "view-order-btn" class="btn btn-success">View Orders</button>
   <button type="button" id="create-order-btn" class="btn btn-primary">Create an Order</button>
   <button type="button" class="btn btn-warning">View Revenue</button>
 `;
};

export default buttons;
