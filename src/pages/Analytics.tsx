import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Analytics() {
  const features = [
    {
      title: "Дашборд в реальном времени",
      description: "Отслеживайте все ключевые метрики вашего клуба в режиме реального времени",
      icon: "Activity",
      benefits: ["Загрузка по часам", "Выручка за день", "Активные пользователи", "Средний чек"]
    },
    {
      title: "Прогнозирование загрузки",
      description: "ИИ-алгоритмы предсказывают пиковые часы и помогают оптимизировать ценообразование",
      icon: "TrendingUp",
      benefits: ["Прогноз на неделю", "Сезонные тренды", "Рекомендации по ценам", "Планирование акций"]
    },
    {
      title: "Финансовые отчеты",
      description: "Подробная финансовая аналитика с возможностью экспорта для бухгалтерии",
      icon: "DollarSign",
      benefits: ["P&L отчеты", "Анализ рентабельности", "Налоговые документы", "Экспорт в 1С"]
    },
    {
      title: "Анализ клиентов",
      description: "Сегментация клиентской базы и анализ поведения для увеличения лояльности",
      icon: "Users",
      benefits: ["RFM анализ", "Сегментация клиентов", "LTV расчет", "Churn анализ"]
    }
  ];

  const metrics = [
    { name: "Выручка", value: "₽1,250,000", change: "+15%", trend: "up" },
    { name: "Посетители", value: "2,847", change: "+8%", trend: "up" },
    { name: "Средний чек", value: "₽439", change: "+12%", trend: "up" },
    { name: "Загрузка", value: "78%", change: "+5%", trend: "up" },
    { name: "Новые клиенты", value: "156", change: "+23%", trend: "up" },
    { name: "Возвраты", value: "89%", change: "+3%", trend: "up" }
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
              <a href="/analytics" className="text-primary font-medium">Аналитика</a>
              <a href="/automation" className="text-gray-600 hover:text-primary transition-colors">Автоматизация</a>
              <a href="/contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Демо-доступ
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Аналитика и отчеты</h1>
              <p className="text-xl mb-8">
                Получайте детальную аналитику работы вашего клуба. Принимайте решения 
                на основе данных и увеличивайте прибыль с помощью умных алгоритмов.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Получить доступ
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Ключевые метрики за месяц</h3>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-sm opacity-90">{metric.name}</div>
                    <div className="text-green-300 text-xs">{metric.change}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Возможности аналитической системы</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексная система аналитики, которая поможет вам понять ваш бизнес 
              и найти точки роста
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={feature.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Интерфейс системы</h2>
            <p className="text-xl text-gray-600">
              Интуитивно понятный дашборд с всей необходимой информацией
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Выручка сегодня</p>
                    <p className="text-2xl font-bold text-green-600">₽45,230</p>
                  </div>
                  <Icon name="TrendingUp" size={32} className="text-green-500" />
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Активных мест</p>
                    <p className="text-2xl font-bold text-blue-600">28/35</p>
                  </div>
                  <Icon name="Monitor" size={32} className="text-blue-500" />
                </div>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Посетителей</p>
                    <p className="text-2xl font-bold text-purple-600">103</p>
                  </div>
                  <Icon name="Users" size={32} className="text-purple-500" />
                </div>
              </Card>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <Icon name="BarChart3" size={64} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Здесь отображаются интерактивные графики и диаграммы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Преимущества нашей аналитики</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Быстрые решения</h3>
              <p className="text-gray-600">
                Мгновенный доступ к данным позволяет быстро реагировать на изменения
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Точные прогнозы</h3>
              <p className="text-gray-600">
                ИИ-алгоритмы анализируют тренды и дают точные прогнозы загрузки
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Рост прибыли</h3>
              <p className="text-gray-600">
                Оптимизация ценообразования и операций увеличивает выручку на 30-50%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Попробуйте аналитику бесплатно</h2>
          <p className="text-xl mb-8">
            Получите 14-дневный бесплатный доступ к полной версии аналитической системы
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Icon name="BarChart3" size={20} className="mr-2" />
            Начать бесплатный период
          </Button>
        </div>
      </section>
    </div>
  );
}