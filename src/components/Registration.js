import React from "react";
import { Formik } from "formik";
import {
  Alert,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

// for dropdown Hobbies list
const hobbies = [
  "Reading",
  "Painting",
  "Photography",
  "Cooking",
  "Playing an instrument",
  "Sewing",
  "Pottery",
  "Traveling",
  "Gaming",
  "Coding",
];

// for dropdown Country list
const country = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

// validate
const UserSchema = (values) => {
  let error = {};

  if (!values.fullName) {
    error.fullName = "Name is required";
  }
  if (!values.address) {
    error.address = "Address is required";
  }
  if (!values.country) {
    error.country = "Country is required";
  }
  if (!values.gender) {
    error.gender = "Gender is required";
  }
  if (!values.hobbies) {
    error.hobbies = "Hobbies is required";
  }

  return error;
};

const Registration = () => {
  return (
    <div className='container'>
      <h3 className='title'>Formik Form - User</h3>
      <Formik
        initialValues={{
          fullName: "",
          address: "",
          country: "",
          gender: "",
          hobbies: [],
        }}
        onSubmit={(values) => alert(JSON.stringify(values, 2, null))}
        validate={UserSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {/* fullName */}

            <TextField
              id='outlined-basic'
              label='Full Name'
              variant='outlined'
              fullWidth
              name='fullName'
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.fullName && formik.errors.fullName && (
              <Alert severity='error'>{formik.errors.fullName}</Alert>
            )}

            {/* address */}
            <TextField
              id='outlined-multiline-static'
              label='Address'
              name='address'
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              multiline
              rows={3}
              fullWidth
            />

            {formik.touched.address && formik.errors.address && (
              <Alert severity='error'>{formik.errors.address}</Alert>
            )}
            {/* Country */}
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Country</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                name='country'
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label='Country'
                defaultValue={""}
              >
                {country.map((name) => (
                  <MenuItem value={name} key={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {formik.touched.country && formik.errors.country && (
              <Alert severity='error'>{formik.errors.country}</Alert>
            )}
            {/* Gender */}
            <FormControl>
              <FormLabel id='demo-row-radio-buttons-group-label'>
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='gender'
                value={formik.values.gender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <FormControlLabel
                  value='male'
                  id='male'
                  control={<Radio />}
                  label='Male'
                />
                <FormControlLabel
                  value='female'
                  id='female'
                  control={<Radio />}
                  label='Female'
                />
                <FormControlLabel
                  value='other'
                  id='other'
                  control={<Radio />}
                  label='Other'
                />
              </RadioGroup>
            </FormControl>
            {formik.touched.gender && formik.errors.gender && (
              <Alert severity='error'>{formik.errors.gender}</Alert>
            )}

            {/* hobbies */}
            <FormControl fullWidth>
              <InputLabel id='demo-multiple-name-label'>
                Hobbies/Interests
              </InputLabel>
              <Select
                labelId='demo-multiple-name-label'
                id='hobbies'
                name='hobbies'
                multiple={true}
                value={formik.values.hobbies}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                input={<OutlinedInput label=' Hobbies/Interests' />}
              >
                {hobbies.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {formik.touched.hobbies && formik.errors.hobbies && (
              <Alert severity='error'>{formik.errors.hobbies}</Alert>
            )}
            {/* Submit */}
            <Button
              variant='contained'
              color='primary'
              fullWidth
              size='large'
              type='submit'
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
