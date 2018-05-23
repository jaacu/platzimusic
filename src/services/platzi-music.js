import trae from 'trae'
import configService from './config'

const platMusicService = trae.create({
  baseUrl: configService.apiUrl
})
export default platMusicService
