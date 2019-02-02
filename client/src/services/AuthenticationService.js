import Api from '@/services/Api'

export default {
  register(credentials) {
    return Api().post('register', credentials)
  }
}

// AuthencationService.register({
//   email: 'engstu@gmail.com',
//   password: '12341234'
// })
