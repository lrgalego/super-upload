module Saver
  extend self
  extend Path

  def save_description(uuid, description)
    save(uuid, 'description', description)
  end

  def save_file(uuid, file_name, temp_file)
    save(uuid, file_name, temp_file.read)
  end

  private

  def save(uuid, file_name, content)
    path = write_base_path uuid
    Dir.mkdir(path) unless Dir.exist? path

    file_name = write_file_path uuid, file_name
    File.open(file_name, "w") do |file|
        file.print content
    end
  end

end
