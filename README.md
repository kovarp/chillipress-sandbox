# ChilliPress sandbox #

The startpoint for Wordpress project build on ChilliPress.

## Installation

1. Install composer packages via command `$ composer install`
2. Install npm packages via command `$ npm i`
3. Generate unique salts in `app/config/config.neon`
4. Setup docker environment in `docker/.env` (change project name)
5. In docker folder run command `$ docker-compose up`
6. Open the website on `http://localhost:8080`
7. Install the Wordpress by using installation wizard
8. After install, go to administration > Permalink and setup the permalinks (due to cache functionality)

## Administration

You can access to admin area on `/administrace`.
Default wp-admin URL is disabled due to security reasons.

## Database dump

The start point for MySQL database is stored in `database/create.sql`
If you did some changes in database, you can easily create DB dump via command `$ composer dump`
