# TULA Investment Group
http://www.tulainvestmentgroup.com

This is the company website for TULA Investment Group. TULA is a Registered Investment Advisor with California specializing in customized equity and bond portfolios.

### To run files locally:
1. Run a local server on port 3000: `rails s`
1. Open a local console: `rails c`

### Deploying to heroku:
1. Precompile assets locally and commit changes: `RAILS_ENV=production rake assets:precompile`
1. Push to origin: `git push origin master`
1. Push to heroku: `git push heroku master`
1. Accessing production console: `heroku run rails c`

### Upgrading notes:
Running on ruby v2.4.5, which is the oldest version of ruby supported by heroku. This version of ruby has compatibility issues with rails v3, which is why the [`support_ruby_v2_4.rb`](./config/initializers/support_ruby_v2_4.rb) initializer is needed. When upgrading to rails 4 or 5, that initializer should be able to be deleted.
