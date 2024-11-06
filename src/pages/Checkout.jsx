import React from 'react';

const Checkout = () => {
  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
      >
        <div className="container">
          <h1 className="page-title">
            Checkout<span>Shop</span>
          </h1>
        </div>
      </div>

      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="checkout">
          <div className="container">
            <div className="checkout-discount">
              <form>
                <input type="text" className="form-control" required id="checkout-discount-input" />
                <label htmlFor="checkout-discount-input" className="text-truncate">
                  Have a coupon? <span>Click here to enter your code</span>
                </label>
              </form>
            </div>

            <form>
              <div className="row">
                <div className="col-lg-9">
                  <h2 className="checkout-title">Billing Details</h2>
                  <div className="row">
                    <div className="col-sm-6">
                      <label>First Name *</label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="col-sm-6">
                      <label>Last Name *</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>

                  <label>Company Name (Optional)</label>
                  <input type="text" className="form-control" />

                  <label>Country *</label>
                  <input type="text" className="form-control" required />

                  <label>Street address *</label>
                  <input type="text" className="form-control" placeholder="House number and Street name" required />
                  <input type="text" className="form-control" placeholder="Apartment, suite, unit, etc..." required />

                  <div className="row">
                    <div className="col-sm-6">
                      <label>Town / City *</label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="col-sm-6">
                      <label>State / County *</label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <label>Postcode / ZIP *</label>
                      <input type="text" className="form-control" required />
                    </div>

                    <div className="col-sm-6">
                      <label>Phone *</label>
                      <input type="tel" className="form-control" required />
                    </div>
                  </div>

                  <label>Email address *</label>
                  <input type="email" className="form-control" required />

                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="checkout-create-acc" />
                    <label className="custom-control-label" htmlFor="checkout-create-acc">
                      Create an account?
                    </label>
                  </div>

                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="checkout-diff-address" />
                    <label className="custom-control-label" htmlFor="checkout-diff-address">
                      Ship to a different address?
                    </label>
                  </div>

                  <label>Order notes (optional)</label>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="4"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                  ></textarea>
                </div>

                <aside className="col-lg-3">
                  <div className="summary">
                    <h3 className="summary-title">Your Order</h3>
                    <table className="table table-summary">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="#">Beige knitted elastic runner shoes</a></td>
                          <td>$84.00</td>
                        </tr>
                        <tr>
                          <td><a href="#">Blue utility pinafore denimdress</a></td>
                          <td>$76.00</td>
                        </tr>
                        <tr className="summary-subtotal">
                          <td>Subtotal:</td>
                          <td>$160.00</td>
                        </tr>
                        <tr>
                          <td>Shipping:</td>
                          <td>Free shipping</td>
                        </tr>
                        <tr className="summary-total">
                          <td>Total:</td>
                          <td>$160.00</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="accordion-summary" id="accordion-payment">
                      {/* Repeat the structure below for each payment method */}
                      <div className="card">
                        <div className="card-header" id="heading-1">
                          <h2 className="card-title">
                            <button
                              className="btn btn-link"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse-1"
                              aria-expanded="true"
                              aria-controls="collapse-1"
                            >
                              Direct bank transfer
                            </button>
                          </h2>
                        </div>
                        <div id="collapse-1" className="collapse show" aria-labelledby="heading-1" data-parent="#accordion-payment">
                          <div className="card-body">
                            Make your payment directly into our bank account. Use your Order ID as the payment reference. Your order will not ship until funds clear.
                          </div>
                        </div>
                      </div>
                      {/* Additional payment options */}
                    </div>

                    <button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
                      <span className="btn-text">Place Order</span>
                      <span className="btn-hover-text">Proceed to Checkout</span>
                    </button>
                  </div>
                </aside>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
