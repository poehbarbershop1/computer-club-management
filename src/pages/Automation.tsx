import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Automation() {
  const automationFeatures = [
    {
      title: "Умное бронирование",
      description: "Автоматическое управление бронированием с учетом пиковых часов и предпочтений клиентов",
      icon: "Calendar",
      features: ["Онлайн-бронирование 24/7", "Автоматическое продление", "Уведомления клиентам", "Управление очередями"],
      savings: "Экономия 15 часов в неделю"
    },
    {
      title: "Автоплатежи",
      description: "Интеграция с платежными системами для автоматического списания средств",
      icon: "CreditCard",
      features: ["Безналичная оплата", "Автосписание", "Возврат средств", "Отчеты по платежам"],
      savings: "Снижение просрочек на 90%"
    },
    {
      title: "Управление оборудованием",
      description: "Автоматический мониторинг состояния компьютеров и переферии",
      icon: "Monitor",
      features: ["Мониторинг железа", "Автообновления", "Диагностика проблем", "Планирование ремонта"],
      savings: "Сокращение простоев на 70%"
    },
    {
      title: "Клиентский сервис",
      description: "Автоматизированная система поддержки клиентов и обработки обращений",
      icon: "Headphones",
      features: ["Чат-бот поддержки", "Автоответы FAQ", "Система тикетов", "Обратная связь"],
      savings: "Ускорение ответов в 5 раз"
    }
  ];

  const processes = [
    {
      title: "Регистрация клиента",
      before: "5-10 минут ручной работы",
      after: "30 секунд автоматически",
      improvement: "95% экономии времени"
    },
    {
      title: "Обработка платежа",
      before: "2-3 минуты + ошибки",
      after: "Мгновенно без ошибок",
      improvement: "100% точность"
    },
    {
      title: "Подготовка отчетов",
      before: "2-3 часа ежедневно",
      after: "Автоматически в реальном времени",
      improvement: "Экономия 20 часов в неделю"
    },
    {
      title: "Техническая поддержка",
      before: "Постоянное присутствие админа",
      after: "Автоматическая диагностика",
      improvement: "Снижение нагрузки на 80%"
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
              <a href="/analytics" className="text-gray-600 hover:text-primary transition-colors">Аналитика</a>
              <a href="/automation" className="text-primary font-medium">Автоматизация</a>
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
              <h1 className="text-5xl font-bold mb-6">Автоматизация процессов</h1>
              <p className="text-xl mb-8">
                Освободите время для развития бизнеса. Наша система автоматизирует 
                все рутинные процессы и позволяет сосредоточиться на стратегических задачах.
              </p>
              <div className="flex space-x-8 mb-8">
                <div>
                  <div className="text-3xl font-bold">90%</div>
                  <div className="text-sm opacity-90">Автоматизации процессов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">25ч</div>
                  <div className="text-sm opacity-90">Экономии времени в неделю</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">0</div>
                  <div className="text-sm opacity-90">Ошибок в расчетах</div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Начать автоматизацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Автоматизированные процессы</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Бронирование мест</span>
                  <Badge className="bg-green-500">Активно</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Обработка платежей</span>
                  <Badge className="bg-green-500">Активно</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Мониторинг оборудования</span>
                  <Badge className="bg-green-500">Активно</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Генерация отчетов</span>
                  <Badge className="bg-green-500">Активно</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Клиентская поддержка</span>
                  <Badge className="bg-green-500">Активно</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Что мы автоматизируем</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексная автоматизация всех ключевых процессов вашего компьютерного клуба
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {automationFeatures.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={feature.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                        <Badge variant="secondary" className="mt-1">{feature.savings}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.features.map((item, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">До и после автоматизации</h2>
            <p className="text-xl text-gray-600">
              Сравните, как изменится работа ваших процессов
            </p>
          </div>

          <div className="space-y-8">
            {processes.map((process, index) => (
              <Card key={index} className="p-6">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{process.title}</h3>
                  </div>
                  <div className="text-center">
                    <div className="text-red-600 font-medium mb-1">Было</div>
                    <div className="text-sm text-gray-600">{process.before}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-green-600 font-medium mb-1">Стало</div>
                    <div className="text-sm text-gray-600">{process.after}</div>
                  </div>
                  <div className="text-center">
                    <Badge className="bg-green-100 text-green-800">
                      {process.improvement}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Интеграции</h2>
            <p className="text-xl text-gray-600">
              Подключаем все необходимые сервисы для полной автоматизации
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Сбербанк", type: "Эквайринг", icon: "CreditCard" },
              { name: "Яндекс.Касса", type: "Платежи", icon: "Wallet" },
              { name: "1С", type: "Учет", icon: "Calculator" },
              { name: "Telegram", type: "Уведомления", icon: "MessageCircle" },
              { name: "SMS.ru", type: "SMS", icon: "Smartphone" },
              { name: "Яндекс.Метрика", type: "Аналитика", icon: "BarChart3" },
              { name: "Steam", type: "Игры", icon: "Gamepad2" },
              { name: "Discord", type: "Сообщество", icon: "Users" }
            ].map((integration, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <Icon name={integration.icon} size={32} className="text-primary mx-auto mb-2" />
                <h3 className="font-semibold">{integration.name}</h3>
                <p className="text-sm text-gray-600">{integration.type}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Рассчитайте экономию от автоматизации</h2>
            <p className="text-xl">
              Узнайте, сколько времени и денег вы сэкономите с нашей системой
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">25 часов</div>
                <div className="text-sm opacity-90">Экономии времени в неделю</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">₽150,000</div>
                <div className="text-sm opacity-90">Экономии в месяц</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold mb-2">3 месяца</div>
                <div className="text-sm opacity-90">Окупаемость системы</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать для моего клуба
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}