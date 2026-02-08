# API Endpoint для страницы About (/home/about)

## Описание
API endpoint для получения данных страницы "О нас" (About) с поддержкой мультиязычности.

## Endpoint

```
GET /about/
```

## Query Parameters

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `locale` | string | Нет | Язык контента. Возможные значения: `kz` (казахский, по умолчанию), `ru` (русский) |

## Примеры запросов

### Казахский язык (по умолчанию)
```
GET /about/
GET /about/?locale=kz
```

### Русский язык
```
GET /about/?locale=ru
```

## Формат ответа

### Успешный ответ (200 OK)

```json
{
  "title": "Бірлестік туралы",
  "paragraphs": [
    "Atyrau BIL Alumni Association 2015 жылы желтоқсан айының 23-інде арнайы жобамен айналысатын заңды ұйым түрінде ашылды.",
    "Жанашыр түлектердің бастамасымен ашылған бірлестіктің басты мақсаты – қоғамға пайдалы болу. Мақсатты жүзеге асыру үшін біз екі бағытта жұмыс жасаймыз.",
    "⦁ Лицей түлектерінің қарым-қатынасын нығайта отырып, бірлескен қоғамдық іс-шараларды жүзеге асыру;",
    "⦁ Лицейдің жан-жақты дамуы үшін қаржылық, әлеуметтік, мәдени-ағартушылық және басқа да қолдаулар көрсету.",
    ""Жұмыла көтерген жүк жеңіл" дейді. Барлық лицей түлектері, біз Сіздерді осы игі істе жұдырықтай жұмылып, лицейдің дамуына өз үлестеріңізді қосуға шақырамыз!"
  ],
  "mission_title": "Біздің миссия",
  "mission_text": "Atyrau BIL Alumni Association миссиясы - бiрлестiктiң қоғамға пайдалы бастамалары төңірегінде түлектерді топтастыру, еріктілік, альтруизм және құлшынысқа негізделген демеушілік пен қайырымдылық жұмыстары арқылы елді, мемлекетті көркейту жолында белсенділікке шақырып жасампаздыққа ынталандыру.",
  "goals_title": "Мақсатымыз:",
  "goals": [
    "Түлектердің қоғамдық жауапкершілігін қолдау және қоғамдық іс шараларға еліктіру;",
    "Лицейдің материалды-техникалық базасын нығайту;",
    "Лицейді дамыту бойынша іс-шараларды жүзеге асыруда тәжірибе алмасу және тарату;",
    "Қайырымдылық, грант, стипендия, наградалар және заңмен тыйым салынбаған басқа әдістер арқылы лицейдің оқушылары мен түлектеріне көмек көрсету және/немесе қолдау (соның ішінде қаржылық қолдау);",
    "Мұқтаж және әлеуметтік әлсіз лицей оқушылары мен түлектеріне қайырымдылық көмек көрсету;",
    "Лицейдің ғылыми-білім, әлеуметтік-мәдени, шығармашылық, спорттық және басқа жобаларға қолдау көрсету;",
    "Түлектердің тұлғалық және кәсіби өсуі, өзара тәжірибе алмасу мақсатында олардың интеллектуалды және іскерлік қабілеттерін біріктіру;",
    "Семинарлар, дөңгелек үстелдер, талқылаулар, спорттық, мәдени және басқа да іс-шараларды ұйымдастыру;",
    "Түлектердің тұлғалық қызығушылықтары, практикалық тәжірибелері мен қабілеттеріне сәйкес тағылымдама және жұмыс орнын таңдауларына қолдау көрсету"
  ]
}
```

### Пример ответа для русского языка (locale=ru)

```json
{
  "title": "О нас",
  "paragraphs": [
    "Atyrau BIL Alumni Association была открыта 23 декабря 2015 года как юридическая организация, занимающаяся специальными проектами.",
    "Главная цель объединения, открытого по инициативе выпускников, - быть полезными обществу. Для достижения этой цели мы работаем в двух направлениях.",
    "⦁ Реализация совместных общественных мероприятий, укрепляя связи между выпускниками лицея;",
    "⦁ Оказание финансовой, социальной, культурно-просветительской и другой поддержки для всестороннего развития лицея.",
    ""Вместе легче" - говорят. Все выпускники лицея, мы призываем вас активно участвовать в этом благом деле и вносить свой вклад в развитие лицея!"
  ],
  "mission_title": "Наша миссия",
  "mission_text": "Миссия Atyrau BIL Alumni Association - объединять выпускников вокруг полезных для общества инициатив объединения, призывая к активности и вдохновляя на созидание через спонсорскую и благотворительную работу, основанную на добровольности, альтруизме и энтузиазме, для украшения страны и государства.",
  "goals_title": "Наши цели:",
  "goals": [
    "Поддержка общественной ответственности выпускников и привлечение к общественным мероприятиям;",
    "Укрепление материально-технической базы лицея;",
    "Обмен и распространение опыта в реализации мероприятий по развитию лицея;",
    "Оказание помощи и/или поддержки учащимся и выпускникам лицея через благотворительность, гранты, стипендии, награды и другие методы, не запрещенные законом (включая финансовую поддержку);",
    "Оказание благотворительной помощи нуждающимся и социально уязвимым учащимся и выпускникам лицея;",
    "Поддержка научно-образовательных, социально-культурных, творческих, спортивных и других проектов лицея;",
    "Объединение интеллектуальных и деловых способностей выпускников для их личностного и профессионального роста, обмена опытом;",
    "Организация семинаров, круглых столов, дискуссий, спортивных, культурных и других мероприятий;",
    "Поддержка выпускников в выборе стажировки и места работы в соответствии с их личностными интересами, практическим опытом и способностями"
  ]
}
```

## Структура данных

### Поля ответа

| Поле | Тип | Описание |
|------|-----|----------|
| `title` | string | Заголовок раздела "О нас" |
| `paragraphs` | array[string] | Массив параграфов текста о объединении |
| `mission_title` | string | Заголовок раздела "Миссия" |
| `mission_text` | string | Текст миссии организации |
| `goals_title` | string | Заголовок раздела "Цели" |
| `goals` | array[string] | Массив целей организации (список) |

## Ошибки

### 404 Not Found
```json
{
  "detail": "Not found."
}
```

### 500 Internal Server Error
```json
{
  "detail": "Internal server error."
}
```

## Примечания

1. Если параметр `locale` не указан или указан неверно, должен возвращаться контент на казахском языке (по умолчанию).
2. Все текстовые поля должны поддерживать HTML-разметку, если необходимо (например, для форматирования).
3. Поле `paragraphs` может содержать пустые строки для разделения параграфов.
4. Поле `goals` должно содержать минимум 1 элемент.

## Пример реализации на Django

```python
# models.py
class About(models.Model):
    locale = models.CharField(max_length=2, choices=[('kz', 'Kazakh'), ('ru', 'Russian')], default='kz')
    title = models.CharField(max_length=255)
    mission_title = models.CharField(max_length=255)
    mission_text = models.TextField()
    goals_title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class AboutParagraph(models.Model):
    about = models.ForeignKey(About, related_name='paragraphs', on_delete=models.CASCADE)
    text = models.TextField()
    order = models.IntegerField(default=0)

class AboutGoal(models.Model):
    about = models.ForeignKey(About, related_name='goals', on_delete=models.CASCADE)
    text = models.TextField()
    order = models.IntegerField(default=0)

# serializers.py
class AboutSerializer(serializers.ModelSerializer):
    paragraphs = serializers.SerializerMethodField()
    goals = serializers.SerializerMethodField()
    
    class Meta:
        model = About
        fields = ['title', 'paragraphs', 'mission_title', 'mission_text', 'goals_title', 'goals']
    
    def get_paragraphs(self, obj):
        return [p.text for p in obj.paragraphs.all().order_by('order')]
    
    def get_goals(self, obj):
        return [g.text for g in obj.goals.all().order_by('order')]

# views.py
class AboutView(APIView):
    def get(self, request):
        locale = request.query_params.get('locale', 'kz')
        about = About.objects.filter(locale=locale).first()
        
        if not about:
            about = About.objects.filter(locale='kz').first()
        
        if not about:
            return Response({"detail": "Not found."}, status=404)
        
        serializer = AboutSerializer(about)
        return Response(serializer.data)

# urls.py
urlpatterns = [
    path('about/', AboutView.as_view(), name='about'),
]
```

## Пример реализации на Node.js/Express

```javascript
// routes/about.js
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const locale = req.query.locale || 'kz';
    
    // Пример данных из базы данных
    const aboutData = await About.findOne({ locale });
    const fallbackData = await About.findOne({ locale: 'kz' });
    
    const data = aboutData || fallbackData;
    
    if (!data) {
      return res.status(404).json({ detail: "Not found." });
    }
    
    res.json({
      title: data.title,
      paragraphs: data.paragraphs.sort((a, b) => a.order - b.order).map(p => p.text),
      mission_title: data.mission_title,
      mission_text: data.mission_text,
      goals_title: data.goals_title,
      goals: data.goals.sort((a, b) => a.order - b.order).map(g => g.text)
    });
  } catch (error) {
    res.status(500).json({ detail: "Internal server error." });
  }
});

module.exports = router;
```
