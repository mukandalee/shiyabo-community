class Admin < ApplicationRecord
    has_many  :events
    has_many  :contributions
    validates :adminName, presence: true
    validates :adminName, uniqueness: true
    validates :adminName, length: { minimum: 4 }
    end