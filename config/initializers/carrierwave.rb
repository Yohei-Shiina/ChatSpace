CarrierWave.configure do |config|
  if Rails.env.test?
    config.storage = :file
    config.enable_processing = false
  else
    # config.storage = :fog
    # config.fog_credentials = Settings.fog.to_hash.except(:directory)
    # config.fog_directory  = Settings.fog.directory
    # config.fog_attributes = {'Cache-Control'=>'max-age=315576000'}
    # config.asset_host     = "https://#{Settings.fog.directory}.s3.amazonaws.com"
    # config.cache_dir      = Rails.root.join('tmp', 'uploads')
  end
end