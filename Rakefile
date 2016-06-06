require 'yaml'

PWD = File.expand_path('../', __FILE__)

desc 'Deploy to master and source branch'
task :deploy do
  system "git push origin source"
  system "JEKYLL_ENV=production bundle exec jekyll build"
  puts
  cd '_site' do
    system "git add -A"
    system "git commit -m 'update at #{Time.now.utc}'"
    puts
    system "git push origin master"
  end
end

desc "Launch preview environment"
task :preview do
  system "bundle exec jekyll s --incremental --baseurl='/railstutorial-china' --host='0.0.0.0'"
end

task :s => :preview
task :server => :preview
task :default => :preview
task :push => :deploy
