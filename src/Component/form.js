import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';

const countries = {
    'India': ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore', 'Trivandrum', 'Hyderabad', 'Pune', 'Jaipur', 'Ahmedabad'],
    'USA': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'],
    'UK': ['London', 'Birmingham', 'Glasgow', 'Liverpool', 'Bristol', 'Manchester', 'Sheffield', 'Leeds', 'Edinburgh', 'Leicester'],
    'Canada': ['Toronto', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton', 'Mississauga', 'Winnipeg', 'Vancouver', 'Brampton', 'Hamilton'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Sunshine Coast', 'Wollongong'],
    'Germany': ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig'],
    'France': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille'],
    'Italy': ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Bari', 'Catania'],
    'Spain': ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Las Palmas', 'Bilbao'],
    'Japan': ['Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kyoto', 'Kawasaki', 'Saitama'],
    'China': ['Shanghai', 'Beijing', 'Tianjin', 'Guangzhou', 'Shenzhen', 'Wuhan', 'Dongguan', 'Chongqing', 'Chengdu', 'Nanjing']
}

const validateName = (name) => {
    const re = /^[a-zA-Z]+$/;
    return re.test(name);
};

const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const validatePhone = (contact) => {
    const re = /^\+\d{1,2} \d{10}$/;
    return re.test(contact);
};

const validatePassword = (password) => {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return re.test(password);
};

const validatePan = (pan) => {
    const re = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return re.test(pan);
};

const validateAadhar = (aadhar) => {
    const re = /^\d{12}$/;
    return re.test(aadhar);
};


const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        contact: '',
        country: '',
        city: '',
        aadhar: '',
        pan: ''
    });

    const [error, setError] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleValidation = () => {
        const error = {};
        if (!formData.firstName) {
            error.firstName = 'First Name is required';
        }
        else if (!validateName(formData.firstName)) {
            error.firstName = 'First Name is not valid';
        }

        if (!formData.lastName) {
            error.lastName = 'Last Name is required';
        }
        else if (!validateName(formData.lastName)) {
            error.lastName = 'Last Name is not valid';
        }

        if (!formData.username) {
            error.username = 'Username is required';
        }

        if (!formData.email) {
            error.email = 'Email is required';
        }
        else if (!validateEmail(formData.email)) {
            error.email = 'Email is not valid';
        }

        if (!formData.password) {
            error.password = 'Password is required';
        }
        else if (!validatePassword(formData.password)) {
            error.password = 'Password must contain atleast 8 characters, 1 number, 1 upper and 1 lowercase';
        }

        if (!formData.contact) {
            error.contact = 'Contact is required';
        }
        else if (!validatePhone(formData.contact)) {
            error.contact = 'Contact number is not valid';
        }

        if (!formData.country) {
            error.country = 'Country is required';
        }

        if (!formData.city) {
            error.city = 'City is required' ;
        }

        if (!formData.aadhar) {
            error.aadhar =  'Aadhar is required';
        }
        else if (!validateAadhar(formData.aadhar)) {
            error.aadhar =  'Aadhar is not valid';
        }

        if (!formData.pan) {
            error.pan =  'PAN is required';
        }
        else if (!validatePan(formData.pan)) {
            error.pan = 'PAN is not valid';
        }

        return error;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isvalid = handleValidation();
        setError(isvalid);
        console.log(formData);
        if(Object.keys(isvalid).length === 0){
            navigate('/success', { state: formData });
        }
    };

    return (
        <div className='form-container'>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <div className='form-wrapper'>
                        <label htmlFor="name">First Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="firstName"
                            placeholder='First Name'
                            value={formData.firstName}
                            onChange={handleChange}
                            autoComplete='off'
                            required />
                        {error.firstName && <span>{error.firstName}</span>}
                    </div>
                    <div className='form-wrapper'>
                        <label htmlFor="name">Last Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="lastName"
                            placeholder='Last Name'
                            value={formData.lastName}
                            onChange={handleChange}
                            autoComplete='off'
                            required />
                        {error.lastName && <span>{error.lastName}</span>}
                    </div>
                </div>
                <div className='form-wrapper'>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder='Username'
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete='off'
                        required />
                    {error.username && <span>{error.username}</span>}
                </div>
                <div className='form-wrapper'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete='off'
                        required />
                    {error.email && <span>{error.email}</span>}
                </div>
                <div className='form-wrapper'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete='off'
                        required />
                    {showPassword ? <i className='fa fa-eye-slash' onClick={() => setShowPassword(!showPassword)}></i> : <i className='fa fa-eye' onClick={() => setShowPassword(!showPassword)}></i>}
                    {error.password && <span>{error.password}</span>}
                </div>
                <div className='form-wrapper'>
                    <label htmlFor='Contact'>Contact:</label>
                    <input
                        type='tel'
                        id='contact'
                        name='contact'
                        placeholder='Contact'
                        value={formData.contact}
                        onChange={handleChange}
                        autoComplete='off'
                        required />
                    {error.contact && <span>{error.contact}</span>}
                </div>
                <div className='form-group'>
                    <div className='form-wrapper'>
                        <label htmlFor='country'>Country:</label>
                        <select
                            name='country'
                            value={formData.country}
                            onChange={handleChange}
                            required>
                            <option value=''>Select Country</option>
                            {Object.keys(countries).map((country) => {
                                return <option key={country} value={country}>{country}</option>
                            })}
                        </select>
                        {error.country && <span>{error.country}</span>}
                    </div>
                    <div className='form-wrapper'>
                        <label htmlFor='city'>City:</label>
                        <select
                            name='city'
                            value={formData.city}
                            onChange={handleChange}
                            required>
                            <option value=''>Select City</option>
                            {formData.country && countries[formData.country].map(city => <option key={city} value={city}>{city}</option>)}
                        </select>
                        {error.city && <span>{error.city}</span>}
                    </div>
                </div>
                <div className='form-wrapper'>
                    <label htmlFor='aadhar'>Aadhar:</label>
                    <input
                        type='text'
                        id='aadhar'
                        name='aadhar'
                        placeholder='Aadhar'
                        value={formData.aadhar}
                        onChange={handleChange}
                        autoComplete='off'
                        required />
                    {error.aadhar && <span>{error.aadhar}</span>}
                </div>
                <div className='form-wrapper'>
                    <label htmlFor='pan'>PAN No.:</label>
                    <input
                        type='text'
                        id='pan'
                        name='pan'
                        placeholder='PAN'
                        value={formData.pan}
                        onChange={handleChange}
                        autoComplete='off'
                        required />
                    {error.pan && <span>{error.pan}</span>}
                </div>

                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;