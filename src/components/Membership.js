import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import './Membership.css';
import NavBar from './navbar';
const plans = [
  {
    title: 'Basic Reader',
    price: '₹149',
    access: 'Limited',
    resolution: 'Standard Definition',
    devices: 'Mobile phone, tablet',
    simultaneousDevices: 1,
    downloadDevices: 1,
    image: "../lcard1.jpeg", // Replace with your image path
  },
  {
    title: 'Standard Reader',
    price: '₹199',
    access: 'Moderate',
    resolution: 'High Definition',
    devices: 'Mobile phone, tablet, computer',
    simultaneousDevices: 1,
    downloadDevices: 1,
    image: '../lcard2.jpeg', // Replace with your image path
  },
  {
    title: 'Advanced Reader',
    price: '₹499',
    access: 'Extensive',
    resolution: 'Full High Definition',
    devices: 'Mobile phone, tablet, computer, TV',
    simultaneousDevices: 2,
    downloadDevices: 2,
    image: '../lcard3.jpeg', // Replace with your image path
  },
  {
    title: 'Premium Reader',
    price: '₹649',
    access: 'Unlimited',
    resolution: 'Ultra High Definition',
    devices: 'Mobile phone, tablet, computer, TV',
    simultaneousDevices: 4,
    downloadDevices: 4,
    image: '../lcard4.jpeg', // Replace with your image path
  },
];

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setStep(1);
    setModalIsOpen(true);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const validateInputs = () => {
    const newErrors = {};
    if (!/^\d{16}$/.test(paymentDetails.cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits.';
    }
    if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(paymentDetails.expiryDate)) {
      newErrors.expiryDate = 'Expiration date must be in MM/YY format.';
    }
    if (!/^\d{3}$/.test(paymentDetails.cvv)) {
      newErrors.cvv = 'CVV must be 3 digits.';
    }
    if (!paymentDetails.name.trim()) {
      newErrors.name = 'Name on card is required.';
    }
    if (!/^\d{10}$/.test(paymentDetails.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      setPaymentDetails({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        name: '',
        phoneNumber: '',
      });
      setStep(3);
    }
  };

  const handleExploreClick = () => {
    navigate('/browse');
  };

  return (
    <div>
      <NavBar/>
    <div className="plan-selection">
      <h1>Choose the plan that's right for you<br/> (per year)</h1>
      <div className="plans">
        {plans.map((plan, index) => (
          <div
            className={`plan ${index === 1 ? 'most-popular' : ''} ${
              selectedPlan === plan ? 'selected' : ''
            }`}
            key={index}
            onClick={() => handlePlanSelect(plan)}
          >
            <img src={`./images/${plan.image}`} alt={plan.title} className="plan-image" />
            <h2>{plan.title}</h2>
            <p className="price">{plan.price}</p>
            <p>{`Access: ${plan.access || 'undefined'}`}</p>
            <p>{`Resolution: ${plan.resolution}`}</p>
            <p>{`Supported devices: ${plan.devices}`}</p>
            <p>{`Simuntaneous device ${plan.simultaneousDevices}`}</p>
            <p>{`Download devices: ${plan.downloadDevices}`}</p>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Payment Form"
        className="payment-modal"
        overlayClassName="payment-modal-overlay"
      >
        {step === 1 && (
          <div>
            <h2>One last thing !!</h2>
            <button onClick={handleNextStep}>Credit or Debit Card</button>
          </div>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <h2>Set up your credit or debit card</h2>
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
                required
              />
              {errors.cardNumber && (
                <span className="error">{errors.cardNumber}</span>
              )}
            </div>
            <div className="form-group">
              <label>Expiration Date (MM/YY)</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handleInputChange}
                required
              />
              {errors.expiryDate && (
                <span className="error">{errors.expiryDate}</span>
              )}
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
                required
              />
              {errors.cvv && <span className="error">{errors.cvv}</span>}
            </div>
            <div className="form-group">
              <label>Name on Card</label>
              <input
                type="text"
                name="name"
                value={paymentDetails.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={paymentDetails.phoneNumber}
                onChange={handleInputChange}
                required
              />
              {errors.phoneNumber && (
                <span className="error">{errors.phoneNumber}</span>
              )}
            </div>
            <div className="form-group">
              <input type="checkbox" required />
              <label>I agree to the Terms of Use, Privacy Statement</label>
            </div>
            <button type="submit">Start Membership</button>
          </form>
        )}
        {step === 3 && (
          <div>
            <h2>Hooray! Welcome to Nebula Library as our pillar.</h2>
            <p>Continue your journey...</p>
            <button onClick={handleExploreClick}>Explore</button>
          </div>
        )}
      </Modal>
    </div>
    </div>
  );
};

export default Membership;
