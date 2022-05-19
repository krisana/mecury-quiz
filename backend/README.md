## Please ensure you have [Docker](https://www.docker.com/)

Project stack is Laravel
<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

## How to install and run

Setup ```env```

```
cp .env.local .env
```

Start up docker and run

```
./vendor/bin/sail up
```

Setup your local domain
Go to ``` /private/etc/hosts ``` and add ``` 127.0.0.1 api.medcury.quiz ``` in file

install packages
```
./vendor/bin/sail composer install
```

Migrate database
```
./vendor/bin/sail artisan migrate
```

Seed data
```
./vendor/bin/sail artisan db:seed
```

Started server on ``` http://api.medcury.quiz ```

