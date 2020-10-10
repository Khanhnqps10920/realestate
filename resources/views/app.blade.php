<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Realestate</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/4e3c8206ba.js" crossorigin="anonymous"></script>

</head>

<body>
    <div id="app">
        
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
