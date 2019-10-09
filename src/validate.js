export default function(values) {
  const errors = {};
  const requiredFields = [
    'name',
    'age',
    'address',
    'phone',
    'department',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
}
