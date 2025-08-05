import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Cases() {
  const cases = [
    {
      id: 1,
      name: "GameZone Premium",
      location: "Москва",
      type: "Премиум игровой клуб",
      seats: 50,
      image: "/img/0637ae2b-359a-4239-9ec6-da03f627b6f8.jpg",
      results: {
        revenue: "+120%",
        visitors: "+95%",
        payback: "3 месяца",
        satisfaction: "98%"
      },
      challenges: [
        "Низкая загрузка в будние дни",
        "Устаревшая система бронирования",
        "Высокая текучка персонала"
      ],
      solutions: [
        "Внедрение динамического ценообразования",
        "Автоматизация всех процессов",
        "Система мотивации персонала",
        "Программа лояльности для клиентов"
      ],
      testimonial: "За 6 месяцев работы с ClubManager наша выручка выросла более чем в 2 раза. Особенно впечатляет качество аналитики и поддержки.",
      author: "Алексей Петров, владелец GameZone Premium"
    },
    {
      id: 2,
      name: "CyberArena",
      location: "Санкт-Петербург",
      type: "Киберспортивная арена",
      seats: 35,
      image: "/img/0637ae2b-359a-4239-9ec6-da03f627b6f8.jpg",
      results: {
        revenue: "+85%",
        visitors: "+110%",
        payback: "4 месяца",
        satisfaction: "96%"
      },
      challenges: [
        "Сложность организации турниров",
        "Неэффективное использование площади",
        "Отсутствие системы рейтингов"
      ],
      solutions: [
        "Система управления турнирами",
        "Оптимизация расстановки оборудования",
        "Внедрение рейтинговой системы",
        "Стриминговое оборудование"
      ],
      testimonial: "Теперь мы проводим турниры каждые выходные, и они всегда собирают полный зал. Система управления просто великолепна!",
      author: "Дмитрий Козлов, директор CyberArena"
    },
    {
      id: 3,
      name: "PlayCafe",
      location: "Екатеринбург",
      type: "Семейный игровой центр",
      seats: 25,
      image: "/img/0637ae2b-359a-4239-9ec6-da03f627b6f8.jpg",
      results: {
        revenue: "+75%",
        visitors: "+60%",
        payback: "5 месяцев",
        satisfaction: "94%"
      },
      challenges: [
        "Привлечение семейной аудитории",
        "Совмещение кафе и игровой зоны",
        "Контроль детского контента"
      ],
      solutions: [
        "Семейные тарифы и акции",
        "Интеграция с кассой кафе",
        "Родительский контроль",
        "Детские турниры и мероприятия"
      ],
      testimonial: "Благодаря новой системе мы стали настоящим семейным центром. Родители спокойно пьют кофе, пока дети играют.",
      author: "Елена Смирнова, владелица PlayCafe"
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
              <a href="/cases" className="text-primary font-medium">Кейсы</a>
              <a href="/about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Кейсы наших клиентов</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Реальные истории успеха компьютерных клубов, которые доверили нам управление своим бизнесом. 
            Изучите результаты и узнайте, как мы можем помочь вашему клубу.
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm opacity-90">Успешных проектов</div>
            </div>
            <div>
              <div className="text-3xl font-bold">85%</div>
              <div className="text-sm opacity-90">Средний рост выручки</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4 мес</div>
              <div className="text-sm opacity-90">Средняя окупаемость</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {cases.map((caseItem, index) => (
            <div key={caseItem.id} className={`mb-20 ${index !== cases.length - 1 ? 'border-b border-gray-200 pb-20' : ''}`}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.name}
                    className="rounded-lg shadow-lg w-full h-80 object-cover"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge variant="outline">{caseItem.type}</Badge>
                    <Badge variant="secondary">{caseItem.location}</Badge>
                    <Badge variant="secondary">{caseItem.seats} мест</Badge>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{caseItem.name}</h2>
                  
                  {/* Results */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{caseItem.results.revenue}</div>
                      <div className="text-sm text-gray-600">Рост выручки</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{caseItem.results.visitors}</div>
                      <div className="text-sm text-gray-600">Рост посещений</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{caseItem.results.payback}</div>
                      <div className="text-sm text-gray-600">Окупаемость</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{caseItem.results.satisfaction}</div>
                      <div className="text-sm text-gray-600">Довольных клиентов</div>
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-red-600">Вызовы:</h3>
                      <ul className="space-y-2">
                        {caseItem.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Icon name="AlertCircle" size={16} className="text-red-500 mr-2 mt-0.5" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3 text-green-600">Решения:</h3>
                      <ul className="space-y-2">
                        {caseItem.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <Icon name="CheckCircle" size={16} className="text-green-500 mr-2 mt-0.5" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <blockquote className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 italic mb-4">"{caseItem.testimonial}"</p>
                    <cite className="text-sm font-medium text-gray-900">— {caseItem.author}</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Общие результаты наших клиентов</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Клубов под управлением</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">₽2.1М</div>
              <div className="text-gray-600">Средняя месячная выручка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.2</div>
              <div className="text-gray-600">Средняя оценка клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">97%</div>
              <div className="text-gray-600">Продлевают контракт</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Хотите такие же результаты?</h2>
          <p className="text-xl mb-8">
            Получите бесплатный анализ вашего клуба и персональный план развития
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Icon name="TrendingUp" size={20} className="mr-2" />
            Получить анализ бесплатно
          </Button>
        </div>
      </section>
    </div>
  );
}