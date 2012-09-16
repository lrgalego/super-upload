module Saver
  extend self
  extend Path

  def save_description(uuid, description)
    path = write_base_path uuid
    Dir.mkdir(path) unless Dir.exist? path

    file_name = write_file_path uuid, 'description'
    File.open(file_name, "w") do |file|
      file.print description
    end
  end

  def save_file(uuid, file_name, temp_file)
    path = write_base_path uuid
    Dir.mkdir(path) unless Dir.exist? path

    file_name = write_file_path uuid, file_name
    File.open(file_name, "w") do |file|
      file.print temp_file.read
    end

  end

end
