task :default do
  sh %{rackup --pid rackup.pid -I. &}
end

task :stop do
  sh %{cat rackup.pid | xargs kill -9}
end

task :install do
  sh %{gem install bundler && bundle install}
end

task :test do
  sh %{ruby test/test_suite.rb}
end
