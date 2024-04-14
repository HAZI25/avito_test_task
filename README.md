# Тестовое задание для стажёра Frontend

### Инструкция по запуску
Запуск проекта в режиме разработчика происходит по команде  `TOKEN=<api_key> npm run start`.  Проект будет доступен по ссылке  [http://localhost:7070](http://localhost:7070/)

### Использованные методы

1. https://api.kinopoisk.dev/v1.4/movie/${id} - поиск фильма по id. 
Пример запроса: https://api.kinopoisk.dev/v1.4/movie/535341
Пример ответа:
```
{
	"fees": {
		"world": {
			"value": 426588510,
			"currency": "$"
		},
		"russia": {
			"value": 1725813,
			"currency": "$"
		},
		"usa": {
			"value": 10198820,
			"currency": "$"
		}
	},
	"status": null,
	"externalId": {
		"imdb": "tt1675434",
		"tmdb": 77338,
		"kpHD": "4127663ed234fa8584aeb969ceb02cd8"
	},
	"rating": {
		"kp": 8.823,
		"imdb": 8.5,
		"filmCritics": 6.8,
		"russianFilmCritics": 100,
		"await": null
	},
	"votes": {
		"kp": 2006683,
		"imdb": 923505,
		"filmCritics": 129,
		"russianFilmCritics": 12,
		"await": 15
	},
	"backdrop": {
		"url": "https://image.openmoviedb.com/tmdb-images/original/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg",
		"previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg"
	},
	"movieLength": 112,
	"images": {
		"postersCount": 40,
		"backdropsCount": 10,
		"framesCount": 40
	},
	"productionCompanies": [
		{
			"name": "Gaumont",
			"url": "https://www.themoviedb.org/t/p/original/nda3dTUYdDrJ6rZqBpYvY865aDv.png",
			"previewUrl": "https://www.themoviedb.org/t/p/w500/nda3dTUYdDrJ6rZqBpYvY865aDv.png"
		},
	],
	"spokenLanguages": [
		{
			"name": "English",
			"nameEn": "English"
		},
	],
	"id": 535341,
	"type": "movie",
	"name": "1+1",
	"description": "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
	"distributors": {
		"distributor": "Каскад фильм",
		"distributorRelease": "Новый Диск"
	},
	"premiere": {
		"world": "2011-09-23T00:00:00.000Z",
		"russia": "2012-04-26T00:00:00.000Z",
		"bluray": "2012-06-25T00:00:00.000Z",
		"dvd": "2012-05-28T00:00:00.000Z"
	},
	"slogan": "Sometimes you have to reach into someone else's world to find out what's missing in your own.",
	"year": 2011,
	"budget": {
		"value": 9500000,
		"currency": "€"
	},
	"poster": {
		"url": "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/orig",
		"previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/x1000"
	},
	"facts": [
		{
			"value": "На создание картины режиссёрский дуэт вдохновила увиденная ими в 2004 году документальная лента, в которой рассказывалось о том, как молодой житель предместья был нанят присматривать за парализованным инвалидом <a href=\"/name/3152842/\" class=\"all\">Филиппом Поццо ди Борго</a>, который остался парализованным после несчастного случая 27 июля 1993 года.",
			"type": "FACT",
			"spoiler": false
		},
	],
	"genres": [
		{
			"name": "драма"
		},
	],
	"countries": [
		{
			"name": "Франция"
		}
	],
	"seasonsInfo": [],
	"persons": [
		{
			"id": 71427,
			"photo": "https://image.openmoviedb.com/kinopoisk-st-images//actor_iphone/iphone360_71427.jpg",
			"name": "Франсуа Клюзе",
			"enName": "François Cluzet",
			"description": "Philippe",
			"profession": "актеры",
			"enProfession": "actor"
		},
	],
	"lists": [
		"top500",
		"top250",
		"popular-films",
		"hd-revise",
		"box-world-not-usa",
		"box-total",
		"hearing_impairment",
		"100_greatest_movies_XXI",
		"hd"
	],
	"typeNumber": 1,
	"alternativeName": "Intouchables",
	"enName": null,
	"names": [
		{
			"name": "1+1"
		},
	],
	"similarMovies": [
		{
			"id": 32898,
			"name": "Достучаться до небес",
			"enName": null,
			"alternativeName": "Knockin' on Heaven's Door",
			"type": "movie",
			"poster": {
				"url": "https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/df6c9527-c2cb-4a17-b4bd-1ed05d2e733d/orig",
				"previewUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4483445/df6c9527-c2cb-4a17-b4bd-1ed05d2e733d/x1000"
			},
			"year": 1997,
			"rating": {
				"kp": 8.638,
				"imdb": 7.8,
				"filmCritics": 0,
				"russianFilmCritics": 100,
				"await": null
			}
		},
	],
	"updatedAt": "2024-04-14T01:00:21.965Z",
	"imagesInfo": {
		"framesCount": 0
	},
	"sequelsAndPrequels": [],
	"ratingMpaa": "r",
	"shortDescription": "Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си",
	"technology": {
		"hasImax": false,
		"has3D": false
	},
	"ticketsOnSale": false,
	"ageRating": 18,
	"logo": {
		"url": "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017f0262661cde61dc260cb86f7830/orig"
	},
	"watchability": {
		"items": [
			{
				"name": "Okko",
				"logo": {
					"url": "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig"
				},
				"url": "https://okko.tv/movie/intouchables?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed"
			},
		]
	},
	"top10": null,
	"top250": 2,
	"audience": [
		{
			"count": 19440920,
			"country": "Франция"
		},
	],
	"deletedAt": null,
	"isSeries": false,
	"seriesLength": null,
	"totalSeriesLength": null,
	"networks": null,
	"videos": {
		"trailers": [
			{
				"url": "https://www.youtube.com/embed/0RqDiYnFxTk",
				"name": "The Intouchables / Intouchables (2011) - Trailer (English subtitles)",
				"site": "youtube",
				"type": "TRAILER"
			},
		]
	}
}
```
2. https://api.kinopoisk.dev/v1.4/movie - универсальный поиск с фильтрами. 
Пример запроса: https://api.kinopoisk.dev/v1.4/movie?page=1&limit=10
Пример ответа:
```
{
  {
  "docs": [
    {
      "status": null,
      "rating": {
        "kp": 8.823,
        "imdb": 8.5,
        "filmCritics": 6.8,
        "russianFilmCritics": 100,
        "await": null
      },
      "votes": {
        "kp": 2006683,
        "imdb": 923505,
        "filmCritics": 129,
        "russianFilmCritics": 12,
        "await": 15
      },
      "backdrop": {
        "url": "https://image.openmoviedb.com/tmdb-images/original/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg",
        "previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg"
      },
      "movieLength": 112,
      "id": 535341,
      "type": "movie",
      "name": "1+1",
      "description": "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
      "year": 2011,
      "poster": {
        "url": "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/orig",
        "previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/x1000"
      },
      "genres": [
        {
          "name": "драма"
        },
        {
          "name": "комедия"
        },
        {
          "name": "биография"
        }
      ],
      "countries": [
        {
          "name": "Франция"
        }
      ],
      "typeNumber": 1,
      "alternativeName": "Intouchables",
      "enName": null,
      "names": [
        {
          "name": "1+1"
        },
        {
          "name": "Intouchables"
        },
        {
          "name": "不可触碰",
          "language": "CN",
          "type": null
        },
        {
          "name": "最佳拍档",
          "language": "CN",
          "type": null
        },
        {
          "name": "无法触碰",
          "language": "CN",
          "type": null
        },
        {
          "name": "Untouchable",
          "language": "GB",
          "type": null
        },
        {
          "name": "不可触摸",
          "language": "CN",
          "type": null
        },
        {
          "name": "Неприкасаемые",
          "language": "RU",
          "type": "Literal"
        },
        {
          "name": "1+1 [Intouchables]",
          "language": "RU",
          "type": null
        },
        {
          "name": "Saikyô no futari",
          "language": "JP",
          "type": null
        },
        {
          "name": "Amigos",
          "language": "CL",
          "type": null
        },
        {
          "name": "Mehubarim la'hayim",
          "language": "IL",
          "type": "Hebrew title"
        },
        {
          "name": "Amigos para siempre",
          "language": "VE",
          "type": null
        },
        {
          "name": "Prijatelja",
          "language": "SI",
          "type": null
        },
        {
          "name": "En oväntad vänskap",
          "language": "SE",
          "type": null
        },
        {
          "name": "Intocáveis",
          "language": "BR",
          "type": null
        },
        {
          "name": "Intouchables – Ziemlich beste Freunde",
          "language": "DE",
          "type": null
        },
        {
          "name": "언터처블 1%의 우정",
          "language": "KR",
          "type": null
        },
        {
          "name": "De Uroerlige",
          "language": "DK",
          "type": null
        },
        {
          "name": "Intocable",
          "language": "ES",
          "type": null
        },
        {
          "name": "Недоторканні",
          "language": "UA",
          "type": "Unofficial Title"
        }
      ],
      "ratingMpaa": "r",
      "shortDescription": "Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си",
      "ticketsOnSale": false,
      "ageRating": 18,
      "logo": {
        "url": "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017f0262661cde61dc260cb86f7830/orig"
      },
      "top10": null,
      "top250": 2,
      "isSeries": false,
      "seriesLength": null,
      "totalSeriesLength": null
    }
  ],
  "total": 1056229,
  "limit": 10,
  "page": 1,
  "pages": 105623
}
```
3. https://api.kinopoisk.dev/v1.4/movie/search - поиск фильмов по названию. 
Пример запроса: https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=1+1
Пример ответа:
```
{
	"docs": [
		{
			"internalNames": [
				"1+1",
				"Intouchables",
				"不可触碰",
				"最佳拍档",
				"无法触碰",
				"Untouchable",
				"不可触摸",
				"Неприкасаемые",
				"1+1 [Intouchables]",
				"Saikyô no futari",
				"Amigos",
				"Mehubarim la'hayim",
				"Amigos para siempre",
				"Prijatelja",
				"En oväntad vänskap",
				"Intocáveis",
				"Intouchables – Ziemlich beste Freunde",
				"언터처블 1%의 우정",
				"De Uroerlige",
				"Intocable",
				"Недоторканні"
			],
			"name": "1+1",
			"alternativeName": "Intouchables",
			"enName": "",
			"year": 2011,
			"genres": [
				{
					"name": "драма"
				},
				{
					"name": "комедия"
				},
				{
					"name": "биография"
				}
			],
			"countries": [
				{
					"name": "Франция"
				}
			],
			"releaseYears": [],
			"id": 535341,
			"externalId": {
				"imdb": "tt1675434",
				"tmdb": 77338,
				"kpHD": "4127663ed234fa8584aeb969ceb02cd8"
			},
			"names": [
				{
					"name": "1+1"
				},
				{
					"name": "Intouchables"
				},
				{
					"name": "不可触碰",
					"language": "CN",
					"type": null
				},
				{
					"name": "最佳拍档",
					"language": "CN",
					"type": null
				},
				{
					"name": "无法触碰",
					"language": "CN",
					"type": null
				},
				{
					"name": "Untouchable",
					"language": "GB",
					"type": null
				},
				{
					"name": "不可触摸",
					"language": "CN",
					"type": null
				},
				{
					"name": "Неприкасаемые",
					"language": "RU",
					"type": "Literal"
				},
				{
					"name": "1+1 [Intouchables]",
					"language": "RU",
					"type": null
				},
				{
					"name": "Saikyô no futari",
					"language": "JP",
					"type": null
				},
				{
					"name": "Amigos",
					"language": "CL",
					"type": null
				},
				{
					"name": "Mehubarim la'hayim",
					"language": "IL",
					"type": "Hebrew title"
				},
				{
					"name": "Amigos para siempre",
					"language": "VE",
					"type": null
				},
				{
					"name": "Prijatelja",
					"language": "SI",
					"type": null
				},
				{
					"name": "En oväntad vänskap",
					"language": "SE",
					"type": null
				},
				{
					"name": "Intocáveis",
					"language": "BR",
					"type": null
				},
				{
					"name": "Intouchables – Ziemlich beste Freunde",
					"language": "DE",
					"type": null
				},
				{
					"name": "언터처블 1%의 우정",
					"language": "KR",
					"type": null
				},
				{
					"name": "De Uroerlige",
					"language": "DK",
					"type": null
				},
				{
					"name": "Intocable",
					"language": "ES",
					"type": null
				},
				{
					"name": "Недоторканні",
					"language": "UA",
					"type": "Unofficial Title"
				}
			],
			"type": "movie",
			"description": "Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
			"shortDescription": "Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си",
			"logo": {
				"url": "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017f0262661cde61dc260cb86f7830/orig"
			},
			"poster": {
				"url": "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/orig",
				"previewUrl": "https://image.openmoviedb.com/kinopoisk-images/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/x1000"
			},
			"backdrop": {
				"url": "https://image.openmoviedb.com/tmdb-images/original/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg",
				"previewUrl": "https://image.openmoviedb.com/tmdb-images/w500/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg"
			},
			"rating": {
				"kp": 8.823,
				"imdb": 8.5,
				"filmCritics": 6.8,
				"russianFilmCritics": 100,
				"await": null
			},
			"votes": {
				"kp": 2006683,
				"imdb": 923505,
				"filmCritics": 129,
				"russianFilmCritics": 12,
				"await": 15
			},
			"movieLength": 112,
			"isSeries": false,
			"ticketsOnSale": false,
			"totalSeriesLength": null,
			"seriesLength": null,
			"ratingMpaa": "r",
			"ageRating": 18,
			"top10": null,
			"top250": 2,
			"typeNumber": 1,
			"status": null,
			"internalRating": 8.823,
			"internalVotes": 2006683
		}
	],
	"total": 29,
	"limit": 10,
	"page": 1,
	"pages": 3
}
```
4. https://api.kinopoisk.dev/v1/movie/possible-values-by-field - получить список стран, жанров и т. д.
Пример запроса: https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=countries.name
Пример ответа:
```
[
	{
		"name": "Австралия",
		"slug": "Avstraliya"
	},
	{
		"name": "Австрия",
		"slug": "Avstriya"
	},
	{
		"name": "Азербайджан",
		"slug": "Azerbaydzhan"
	},
]
```
5. https://api.kinopoisk.dev/v1.4/season - поиск сезонов.
Пример запроса: https://api.kinopoisk.dev/v1.4/season?page=1&limit=10
Пример ответа:
```
{
	"docs": [
		{
			"movieId": 435,
			"number": 1,
			"airDate": "1993-02-21T00:00:00.000Z",
			"createdAt": "2024-04-13T15:21:17.469Z",
			"enName": "Season 1",
			"episodes": [
				{
					"number": 1,
					"name": "Эпизод 1",
					"enName": "Episode 1",
					"airDate": "1993-02-21T00:00:00.000Z",
					"description": "",
					"enDescription": "Private Hopper passes the day in the War Office dreaming of becoming a drummer. Meanwhile, new recruit Private Francis is dancing to a different beat...",
					"still": {
						"url": null,
						"previewUrl": null
					}
				},
				{
					"number": 2,
					"name": "Эпизод 2",
					"enName": "Episode 2",
					"airDate": "1993-02-28T00:00:00.000Z",
					"description": "",
					"enDescription": "Francis' worst fears about who lives upstairs with the beautiful Sylvia Berry are confirmed, and he confides all to Mick Hopper - with disastrous results.",
					"still": {
						"url": null,
						"previewUrl": null
					}
				},
				{
					"number": 3,
					"name": "Эпизод 3",
					"enName": "Episode 3",
					"airDate": "1993-03-07T00:00:00.000Z",
					"description": "",
					"enDescription": "Hopper continues to fantasise at work and discusses women and love with Francis. When the red phone rings, Hopper is convinced the message is about the Suez crisis.",
					"still": {
						"url": null,
						"previewUrl": null
					}
				},
				{
					"number": 4,
					"name": "Эпизод 4",
					"enName": "Episode 4",
					"airDate": "1993-03-14T00:00:00.000Z",
					"description": "",
					"enDescription": "Hopper is dreaming of Lisa. Francis is dreaming of Sylvia. And all hell breaks loose down at the Hammersmith Palais.",
					"still": {
						"url": null,
						"previewUrl": null
					}
				},
				{
					"number": 5,
					"name": "Эпизод 5",
					"enName": "Episode 5",
					"airDate": "1993-03-21T00:00:00.000Z",
					"description": "",
					"enDescription": "Sylvia despairs at Francis and is angry at Atterbow. Meanwhile, Hopper gets ready for his night out with Lisa.",
					"still": {
						"url": null,
						"previewUrl": null
					}
				},
				{
					"number": 6,
					"name": "Эпизод 6",
					"enName": "Episode 6",
					"airDate": "1993-03-28T00:00:00.000Z",
					"description": "",
					"enDescription": "Francis has a confession to make to his family: Vickie is horrified, Fred just laughs. Elsewhere, Sylvia visits Harold Atterbrow in hospital.",
					"still": {
						"url": null,
						"previewUrl": null
					}
				}
			],
			"episodesCount": 6,
			"name": "Сезон 1",
			"source": "tmdb",
			"updatedAt": "2024-04-13T15:21:17.469Z",
			"id": "661aa2ed15354aead50674e5"
		}
	],
	"total": 138775,
	"limit": 10,
	"page": 1,
	"pages": 13878
}
```
6. https://api.kinopoisk.dev/v1.4/review - универсальный поиск отзывов с фильтрами.
Пример запроса: https://api.kinopoisk.dev/v1.4/review?page=1&limit=10
Пример ответа:
```
{
	"docs": [
		{
			"id": 3371711,
			"movieId": 1394131,
			"title": "На первом и последнем плане...",
			"type": "Негативный",
			"review": "Как ни странно, основное достоинство сериала - это актерская игра.",
			"date": "2024-04-13T11:14:41.000Z",
			"author": "richterds - 6556",
			"userRating": 1,
			"authorId": 19259403,
			"createdAt": "2024-04-13T20:10:12.707Z",
			"updatedAt": "2024-04-13T20:10:12.707Z"
		}
	],
	"total": 809468,
	"limit": 10,
	"page": 1,
	"pages": 80947
}
```
7. https://api.kinopoisk.dev/v1.4/person - универсальный поиск персон с фильтрами
Пример запроса: https://api.kinopoisk.dev/v1.4/person?page=1&limit=10
Пример ответа:
```
{
	"docs": [
		{
			"id": 10173566,
			"name": null,
			"enName": "Victor Escoudé-Oury",
			"photo": null,
			"sex": "Мужской",
			"age": null
		}
	],
	"total": 5825553,
	"limit": 10,
	"page": 1,
	"pages": 582556
}
```
8. https://api.kinopoisk.dev/v1.4/image - универсальный поиск картинок с фильтрами
Пример запроса: https://api.kinopoisk.dev/v1.4/image?page=1&limit=10
Пример ответа:
```
{
	"docs": [
		{
			"movieId": 5379282,
			"type": "shooting",
			"url": "https://image.openmoviedb.com/kinopoisk-images/10893610/1c541c32-eb19-4bf4-8024-718b91d34df8/orig",
			"previewUrl": "https://image.openmoviedb.com/kinopoisk-images/10893610/1c541c32-eb19-4bf4-8024-718b91d34df8/360",
			"height": 4853,
			"width": 7272,
			"createdAt": "2023-09-30T00:46:39.432Z",
			"updatedAt": "2023-09-30T00:46:39.432Z",
			"id": "65176fef9d6148553be43d6c"
		}
	],
	"total": 2284129,
	"limit": 10,
	"page": 1,
	"pages": 228413
}
```


### Проблемы и мысли

* **Сборщик**. Изначально хотел писать на **Vite** из-за скорости, но потом увидел, что в задании **Webpack**, **cra** пользоваться не хотелось, потому что вам, проверяя каждый проект, пришлось бы много ненужных пакетов качать, поэтому использую свою сборку.
* **Backend**.  Бэкэнд работал плохо (в последние дней 5 его починили), нестабильно, то ответы не приходили, бились в таймауты, то вообще CORS ошибка приходила каким-то образом))). Так же описание сущностей в доке неакутально, в ответе приходят поля, которые не описаны и наоборот.
* **Пагинация**.  Пагинация на списках фильмов динамическая (в связке с IntersectionObserver). Там, где это не надо, написал свой простенький компонент.
* **Дизайн**. Пожалел, что не использовал готовые библиотеки компонентов (изначально думал, что успею), это сэкономило бы больше времени. Написал свой слайдер, на котором можно выбирать количество отображаемых элементов, что для меня впервые.
* **SearchParams**. В первый раз воспользовался SearchParams из ReactRouter, довольно опасная штука, может вызывать ненужные ререндеры.

## Итого

Благодаря этому заданию, я узнал много нового и вспомнил еще больше старого, поэтому очень доволен. Из минусов работы хочу отметить, что в моем решении нет архитектуры. Я совсем недавно начал изучать FSD и имею мало опыта, поэтому постеснялся лепить FSD в первый раз.
