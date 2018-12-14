# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
ruby 2.3.1p112 (2016-04-26 revision 54768) [x86_64-linux]

* Database structure

## groupsテーブル
|Column |Type |Options |
|-----|---|-----|
|name|string|null: false|

### Association
- has_many :users, through: :groups_users
- has_many :group_users
- has_many :messages

## usersテーブル

|Column|Type|Options|
|-----|---|-----|
|name |string|index: true, null: false|

### Association
- has_many :groups, through: :group_users
- has_many :group_users
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|-----|---|-----|
|body|text|null: false|
|image|string|-----|
|group |references|null: false, foreign_key: true|
|user |references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## (中間)group_usersテーブル
|Column|Type|Options|
|-----|---|-----|
|group|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user