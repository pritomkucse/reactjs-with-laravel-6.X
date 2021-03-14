<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <?php $v = time(); ?>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Project Management</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}?v=<?= $v ?>" rel="stylesheet">
    <link href="{{ asset('css/home.css') }}" rel="stylesheet">
    <script type="text/javascript">
        window.APP_URL = "<?= env("APP_URL"); ?>";
        window.APP_PATH = "<?= env("APP_PATH"); ?>";
    </script>
</head>
<body>
<div id="app"></div>

<script src="{{ asset('js/object-assign-auto.min.js') }}"></script>
<script src="{{ asset('js/app.js') }}?v=<?= $v ?>"></script>

</body>
</html>