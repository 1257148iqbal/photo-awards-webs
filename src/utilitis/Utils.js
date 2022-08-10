/* eslint-disable no-unused-vars */
// eslint-disable no-console
// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = obj => Object.keys(obj).length === 0;

// ** Checks if the passed date is today
const isToday = date => {
  const today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  );
};


export const formatDate = (value, formatting = { month: 'short', day: 'numeric', year: 'numeric' }) => {
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};

// ** Returns short month of passed date
export const formatDateToMonthShort = (value, toTimeForCurrentDay = true) => {
  const date = new Date(value);
  let formatting = { month: 'short', day: 'numeric' };

  if (toTimeForCurrentDay && isToday(date)) {
    formatting = { hour: 'numeric', minute: 'numeric' };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};

//** Random Id Generator */

export const randomIdGenerator = () => {
  const id = Math.floor(Math.random() * Date.now());
  return id;
};

//** Random Id Generator: String */

export const randomIdString = () => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 4; i++) {
    result += `set-${characters.charAt(Math.floor(Math.random() * charactersLength))}`;
  }
  return result;
};

//** Random Id Generator: Field */

export const randomFieldId = () => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 2; i++) {
    result += `fid-${characters.charAt(Math.floor(Math.random() * charactersLength))}`;
  }
  return result;
};

/// Convert Query String
export const convertQueryString = params => {
  const searchParams = new URLSearchParams(params);
  return searchParams;
};

export const comparerForDelete = inputValue => {
  return function(newExistingStyleProductCategory) {
    return (
      inputValue.filter(function(other) {
        return other.value === newExistingStyleProductCategory.value;
      }).length === 0
    );
  };
};

///FOr Formating JSON Data
export const showJsonHtml = (tagId, data) => {
  const element = document.querySelector(`#${tagId}`);
  if (element) {
    element.textContent = JSON.stringify(data, null, 2);
  }
  //  const getJSON = document.getElementById( `${tagId}` ).textContent = JSON.stringify( data, null, 2 );
  return element;
};

// ** React Select Theme Colors
export const selectThemeColors = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#7367f01a', // for option hover bg-color
    primary: '#7367f0', // for selected option bg-color
    neutral10: '#7367f0', // for tags bg-color
    neutral20: '#ededed', // for input border-color
    neutral30: '#ededed' // for input hover border-color
  }
});
