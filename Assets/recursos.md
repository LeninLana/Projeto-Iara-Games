**Variáveis**
:root {
    --font-body: Quicksand;
    --color-light: rgb(255, 255, 255);
    --color-blue-50: rgb(133, 144, 172);
    --color-blue-100: rgb(50, 60, 85);
    --color-blue-900: rgb(25, 52, 121);
    --spacing-1: 10px;
    --spacing-3: 30px;
    --radius: 5px;
}

**Link Google Fonts**
 <link rel="preconnect" href="https://fonts.googleapis.com">
 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">

**Font-awesome**
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

**Ícones**
<i class="fa-regular fa-user icon"></i>
<i class="fa-solid fa-key icon"></i>
<i class="fa-solid fa-at icon"></i>
<i class="fa-solid fa-phone-flip icon"></i>
<i class="fa-solid fa-link icon"></i>
<i class="fa-regular fa-calendar icon"></i>
<i class="fa-solid fa-angle-down icon"></i>
<i class="fa-solid fa-rocket"></i>

**Máscara JS**
<script src="https://unpkg.com/imask"></script>
IMask(document.getElementById('telefone-usuario'), {
    mask: [
        { mask: '(00) 0000-0000' },
        { mask: '(00) 00000-0000' }
    ]
});