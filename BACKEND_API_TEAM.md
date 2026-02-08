# API Endpoint для страницы Team/Management (/home/managment)

## Описание
API endpoint для получения данных страницы "Команда" (Team/Management) с поддержкой мультиязычности. Страница отображает информацию о команде и основателях ассоциации.

## Endpoint

```
GET /team/
```

## Query Parameters

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| `locale` | string | Нет | Язык контента. Возможные значения: `kz` (казахский, по умолчанию), `ru` (русский) |

## Примеры запросов

### Казахский язык (по умолчанию)
```
GET /team/
GET /team/?locale=kz
```

### Русский язык
```
GET /team/?locale=ru
```

## Формат ответа

### Успешный ответ (200 OK)

```json
{
  "team_title": "Біздің команда",
  "team_members": [
    {
      "id": 1,
      "name": "Ануарбек Хайрым",
      "role": "Атқарушы директор",
      "year": "Есік БИЛ '06",
      "contact": "+7 707 788 70 20",
      "image": "https://example.com/images/kenes1.jpg"
    },
    {
      "id": 2,
      "name": "Елемесов Ақжол",
      "role": "Астана қ. студент менеджері",
      "year": "Есік БИЛ '11",
      "contact": "+7 707 363 4115",
      "image": "https://example.com/images/kenes3.PNG"
    },
    {
      "id": 3,
      "name": "Абдулла Әбілмансұр",
      "role": "Алматы қ. студент менеджері",
      "year": "Есік БИЛ '23",
      "contact": "+7 708 718 3998",
      "image": "https://example.com/images/kenes2.JPG"
    }
  ],
  "founders_title": "Бірлестіктің құрылтайшылары",
  "founders": [
    {
      "name": "Нұрәлім Ұлан Нұрділдаұлы"
    },
    {
      "name": "Смаилов Асет Есенбекович"
    },
    {
      "name": "Омар Заңғар Омарұлы"
    },
    {
      "name": "Рахимбеков Берик"
    },
    {
      "name": "Сагинбеков Арай Амангельдыевич"
    },
    {
      "name": "Акаев Ернар Нурланович"
    },
    {
      "name": "Нұрмахан Ернар Серікұлы"
    },
    {
      "name": "Нурсапаев Маргулан Кахарманович"
    },
    {
      "name": "Серік Әділет Саятұлы"
    },
    {
      "name": "Нұрболат Дінмұхамед Нұрболатұлы"
    }
  ]
}
```

## Структура данных

### Корневой объект

| Поле | Тип | Обязательное | Описание |
|------|-----|--------------|----------|
| `team_title` | string | Да | Заголовок секции команды |
| `team_members` | array | Да | Массив объектов с информацией о членах команды |
| `founders_title` | string | Да | Заголовок секции основателей |
| `founders` | array | Да | Массив объектов с именами основателей |

### Объект team_members

| Поле | Тип | Обязательное | Описание |
|------|-----|--------------|----------|
| `id` | integer | Да | Уникальный идентификатор члена команды |
| `name` | string | Да | Полное имя члена команды |
| `role` | string | Да | Должность/роль в организации |
| `year` | string | Да | Год выпуска из БИЛ (например, "Есік БИЛ '06") |
| `contact` | string | Да | Контактная информация (телефон) |
| `image` | string | Да | URL изображения члена команды |

### Объект founders

| Поле | Тип | Обязательное | Описание |
|------|-----|--------------|----------|
| `name` | string | Да | Полное имя основателя |

## Примеры ответов для разных языков

### Казахский язык (kz)

```json
{
  "team_title": "Біздің команда",
  "team_members": [
    {
      "id": 1,
      "name": "Ануарбек Хайрым",
      "role": "Атқарушы директор",
      "year": "Есік БИЛ '06",
      "contact": "+7 707 788 70 20",
      "image": "https://example.com/images/kenes1.jpg"
    }
  ],
  "founders_title": "Бірлестіктің құрылтайшылары",
  "founders": [
    {
      "name": "Нұрәлім Ұлан Нұрділдаұлы"
    }
  ]
}
```

### Русский язык (ru)

```json
{
  "team_title": "Наша команда",
  "team_members": [
    {
      "id": 1,
      "name": "Ануарбек Хайрым",
      "role": "Исполнительный директор",
      "year": "Есік БИЛ '06",
      "contact": "+7 707 788 70 20",
      "image": "https://example.com/images/kenes1.jpg"
    }
  ],
  "founders_title": "Основатели ассоциации",
  "founders": [
    {
      "name": "Нұрәлім Ұлан Нұрділдаұлы"
    }
  ]
}
```

## Обработка ошибок

### 404 Not Found
Если данные не найдены:
```json
{
  "detail": "Not found."
}
```

### 500 Internal Server Error
При внутренней ошибке сервера:
```json
{
  "detail": "Internal server error."
}
```

## Примечания для бэкенда

1. **Изображения**: Поле `image` должно содержать полный URL к изображению. Изображения должны быть доступны по HTTP/HTTPS.

2. **Порядок отображения**: Члены команды отображаются в том порядке, в котором они приходят в массиве `team_members`. Рекомендуется отсортировать их по важности или алфавиту.

3. **Мультиязычность**: Все текстовые поля (`team_title`, `role`, `founders_title`, `name` в founders) должны поддерживать локализацию в зависимости от параметра `locale`.

4. **Валидация**: 
   - Поле `contact` должно содержать валидный формат телефона
   - Поле `image` должно быть валидным URL
   - Поле `year` может содержать любой текст, но обычно формат "Есік БИЛ 'XX"

5. **Производительность**: Рекомендуется кэшировать ответы для каждого языка, так как данные команды меняются редко.

## Примеры реализации

### Django REST Framework

```python
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.utils import translation

class TeamViewSet(viewsets.ViewSet):
    @action(detail=False, methods=['get'])
    def list(self, request):
        locale = request.query_params.get('locale', 'kz')
        translation.activate(locale)
        
        team_members = TeamMember.objects.filter(is_active=True).order_by('order')
        founders = Founder.objects.all().order_by('name')
        
        data = {
            'team_title': _('Біздің команда') if locale == 'kz' else _('Наша команда'),
            'team_members': [
                {
                    'id': member.id,
                    'name': member.name,
                    'role': member.get_role_display(),
                    'year': member.year,
                    'contact': member.contact,
                    'image': request.build_absolute_uri(member.image.url) if member.image else None
                }
                for member in team_members
            ],
            'founders_title': _('Бірлестіктің құрылтайшылары') if locale == 'kz' else _('Основатели ассоциации'),
            'founders': [
                {'name': founder.name}
                for founder in founders
            ]
        }
        
        return Response(data)
```

### Node.js/Express

```javascript
const express = require('express');
const router = express.Router();

router.get('/team/', async (req, res) => {
  try {
    const locale = req.query.locale || 'kz';
    
    const teamMembers = await TeamMember.find({ isActive: true })
      .sort({ order: 1 });
    const founders = await Founder.find().sort({ name: 1 });
    
    const translations = {
      kz: {
        team_title: 'Біздің команда',
        founders_title: 'Бірлестіктің құрылтайшылары'
      },
      ru: {
        team_title: 'Наша команда',
        founders_title: 'Основатели ассоциации'
      }
    };
    
    const data = {
      team_title: translations[locale].team_title,
      team_members: teamMembers.map(member => ({
        id: member._id,
        name: member.name,
        role: member.role,
        year: member.year,
        contact: member.contact,
        image: `${req.protocol}://${req.get('host')}${member.image}`
      })),
      founders_title: translations[locale].founders_title,
      founders: founders.map(founder => ({
        name: founder.name
      }))
    };
    
    res.json(data);
  } catch (error) {
    res.status(500).json({ detail: 'Internal server error.' });
  }
});

module.exports = router;
```

## Тестирование

### cURL примеры

```bash
# Получить данные на казахском языке
curl -X GET "http://localhost:8000/team/?locale=kz"

# Получить данные на русском языке
curl -X GET "http://localhost:8000/team/?locale=ru"
```

### Postman

1. Метод: `GET`
2. URL: `http://localhost:8000/team/`
3. Query Params:
   - `locale`: `kz` или `ru`
