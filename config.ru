require 'sinatra/base'
require 'securerandom'
require 'json'

require 'app/path'
require 'app/saver'
require 'app/super_uploader'


run SuperUploader
