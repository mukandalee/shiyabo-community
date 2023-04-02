#config/initializers/session_store.rb 
if Rails.env === 'production' 
Rails.application.config.session_store :cookie_store, key: '_ShiyaboCom', domain: 'ShiyaboCom-json-api'
else
  Rails.application.config.session_store :cookie_store, key: 'ShiyaboCom'
end