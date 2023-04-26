import FormDataPolyfill from 'form-data'

const FormData = global.FormData || FormDataPolyfill

export default FormData