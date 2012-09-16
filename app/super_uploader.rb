class SuperUploader < Sinatra::Base
  include Path
  include Saver

  get '/' do
    @uuid = SecureRandom.uuid
    erb :index
  end

  post '/upload' do
    save_file params[:uuid], params[:file][:filename], params[:file][:tempfile]

    {
      path: delivery_file_path(params[:uuid], params[:file][:filename])
    }.to_json
  end

  post '/save' do
    save_description params[:uuid], params[:description]

    {
      path: delivery_file_path(params[:uuid], params[:file][:filename]), 
      title: params[:file][:name]
    }.to_json
  end

end


