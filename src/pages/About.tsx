import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function About() {
  const team = [
    {
      name: "Александр Иванов",
      position: "Генеральный директор",
      experience: "12 лет в IT",
      description: "Эксперт в области автоматизации бизнес-процессов и управления проектами",
      image: "/img/0637ae2b-359a-4239-9ec6-da03f627b6f8.jpg"
    },
    {
      name: "Мария Петрова",
      position: "Директор по развитию",
      experience: "8 лет в геймдеве",
      description: "Специалист по игровой индустрии и маркетингу развлекательных заведений",
      image: "/img/0637ae2b-359a-4239-9ec6-da03f627b6f8.jpg"
    },
    {
      name: "Дмитрий Козлов",
      position: "Технический директор",
      experience: "10 лет в разработке",
      description: "Архитектор высоконагруженных систем и эксперт по кибербезопасности",
      image: "/img/0637ae2b-359a-4239-9ec6-da03f627b6f8.jpg"
    },
    {
      name: "Елена Смирнова",
      position: "Директор по клиентскому сервису",
      experience: "7 лет в сервисе",
      description: "Эксперт по клиентскому опыту и построению долгосрочных отношений",
      image: "/img/0637ae2b-359a-4239-9ec6-da03f627b6f8.jpg"
    }
  ];

  const values = [
    {
      title: "Результат",
      description: "Мы гарантируем конкретные результаты и несем ответственность за каждый проект",
      icon: "Target"
    },
    {
      title: "Инновации",
      description: "Используем передовые технологии и постоянно развиваем наши решения",
      icon: "Lightbulb"
    },
    {
      title: "Партнерство",
      description: "Строим долгосрочные отношения и становимся частью команды наших клиентов",
      icon: "Handshake"
    },
    {
      title: "Качество",
      description: "Высокие стандарты во всем: от кода до клиентского сервиса",
      icon: "Award"
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Основание компании",
      description: "Запуск первого проекта автоматизации компьютерного клуба в Москве"
    },
    {
      year: "2019",
      title: "Расширение команды",
      description: "Привлечение экспертов из игровой индустрии и IT-сферы"
    },
    {
      year: "2020",
      title: "Первые 50 клиентов",
      description: "Достижение отметки в 50 клубов под управлением"
    },
    {
      year: "2021",
      title: "Выход в регионы",
      description: "Открытие представительств в 5 крупных городах России"
    },
    {
      year: "2022",
      title: "Технологический прорыв",
      description: "Запуск собственной платформы управления клубами"
    },
    {
      year: "2023",
      title: "Международное признание",
      description: "Получение премии 'Лучшее решение для развлекательной индустрии'"
    },
    {
      year: "2024",
      title: "150+ клиентов",
      description: "Достижение отметки в 150 клубов и планы международной экспансии"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Monitor" size={32} className="text-primary" />
              <span className="text-xl font-bold text-primary">ClubManager</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="/services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="/pricing" className="text-gray-600 hover:text-primary transition-colors">Тарифы</a>
              <a href="/cases" className="text-gray-600 hover:text-primary transition-colors">Кейсы</a>
              <a href="/about" className="text-primary font-medium">О компании</a>
              <a href="/contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Получить консультацию
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">О компании ClubManager</h1>
              <p className="text-xl mb-8">
                Мы — команда экспертов, которая с 2018 года помогает владельцам компьютерных клубов 
                увеличивать прибыль и оптимизировать бизнес-процессы. За 6 лет работы мы стали 
                лидерами в области управления игровыми заведениями.
              </p>
              <div className="flex space-x-8">
                <div>
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-sm opacity-90">лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">150+</div>
                  <div className="text-sm opacity-90">клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm opacity-90">экспертов</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/img/0637ae2b-359a-4239-9ec6-da03f627b6f8.jpg" 
                alt="Команда ClubManager"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Icon name="Compass" size={48} className="text-primary mr-4" />
                  <h2 className="text-3xl font-bold">Наша миссия</h2>
                </div>
                <p className="text-lg text-gray-600">
                  Сделать каждый компьютерный клуб успешным и прибыльным бизнесом, 
                  предоставляя владельцам современные инструменты управления и 
                  освобождая их время для развития и творчества.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Icon name="Eye" size={48} className="text-primary mr-4" />
                  <h2 className="text-3xl font-bold">Наше видение</h2>
                </div>
                <p className="text-lg text-gray-600">
                  Стать международным лидером в области управления развлекательными 
                  заведениями, создавая экосистему, где технологии служат людям и 
                  помогают строить успешный бизнес.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">История развития</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <div className="text-2xl font-bold text-primary">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 mr-8"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши достижения</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">₽500М+</div>
              <div className="text-gray-600">Дополнительной выручки клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Техническая поддержка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-gray-600">Наград индустрии</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы стать частью нашей истории успеха?</h2>
          <p className="text-xl mb-8">
            Присоединяйтесь к 150+ владельцам клубов, которые доверили нам свой бизнес
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Icon name="Users" size={20} className="mr-2" />
            Стать клиентом
          </Button>
        </div>
      </section>
    </div>
  );
}