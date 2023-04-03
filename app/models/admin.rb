class Admin < ApplicationRecord
    has_many  :events
    has_many  :contributions
    has_secure_password
    validates :adminName, presence: true
    validates :adminName, uniqueness: true
    validates :adminName, length: { minimum: 4 }
    end