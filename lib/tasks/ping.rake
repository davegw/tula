desc "Pings tulainvestmentgroup.com every 10 minutes"
task :tula_ping do
  require "net/http"
  uri = URI("http://tulainvestmentgroup.com")
  Net::HTTP.get_response(uri)
end