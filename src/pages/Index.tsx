import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const useCases = [
    {
      icon: "MessageSquare",
      title: "Генерация текста",
      description: "ChatGPT, Claude и другие модели создают тексты, отвечают на вопросы, пишут код",
      example: "Автоматизация поддержки клиентов, создание контента, помощь в программировании"
    },
    {
      icon: "Image",
      title: "Создание изображений",
      description: "DALL-E, Midjourney, Stable Diffusion генерируют уникальные изображения",
      example: "Дизайн, маркетинг, концепт-арт, иллюстрации для проектов"
    },
    {
      icon: "Mic",
      title: "Распознавание речи",
      description: "Whisper и аналоги превращают голос в текст с высокой точностью",
      example: "Транскрибация встреч, субтитры, голосовые помощники"
    },
    {
      icon: "Video",
      title: "Обработка видео",
      description: "Анализ, генерация и улучшение видеоконтента",
      example: "Автоматический монтаж, распознавание объектов, deepfake технологии"
    }
  ];

  const industries = [
    { name: "Медицина", icon: "Heart", color: "bg-red-100 text-red-600" },
    { name: "Финансы", icon: "TrendingUp", color: "bg-green-100 text-green-600" },
    { name: "Образование", icon: "GraduationCap", color: "bg-blue-100 text-blue-600" },
    { name: "Транспорт", icon: "Car", color: "bg-purple-100 text-purple-600" },
    { name: "Производство", icon: "Factory", color: "bg-orange-100 text-orange-600" },
    { name: "Маркетинг", icon: "Target", color: "bg-pink-100 text-pink-600" }
  ];

  const resources = [
    {
      title: "Курсы и обучение",
      items: [
        { name: "Coursera: AI для всех", link: "#" },
        { name: "Школа анализа данных Яндекса", link: "#" },
        { name: "Fast.ai - практический курс", link: "#" }
      ]
    },
    {
      title: "Инструменты",
      items: [
        { name: "TensorFlow - библиотека от Google", link: "#" },
        { name: "PyTorch - фреймворк от Meta", link: "#" },
        { name: "Hugging Face - готовые модели", link: "#" }
      ]
    },
    {
      title: "Сообщества",
      items: [
        { name: "ODS.ai - русскоязычное сообщество", link: "#" },
        { name: "Kaggle - соревнования", link: "#" },
        { name: "AI Stack Exchange", link: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        
        <header className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <img 
              src="https://cdn.poehali.dev/projects/412f3d84-f596-4cfb-9540-c798db4e380e/files/cc99a6e3-1080-4de5-a265-12f43f8125ce.jpg" 
              alt="Нейросети" 
              className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Нейросети простыми словами
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Узнайте, как искусственный интеллект меняет мир вокруг нас и как вы можете использовать его возможности
          </p>
        </header>

        <section className="mb-20 animate-fade-in">
          <Card className="bg-white/80 backdrop-blur border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Icon name="Sparkles" className="text-primary" size={32} />
                Что такое нейросети?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
              <p>
                <strong>Нейросеть</strong> — это компьютерная система, которая учится решать задачи, анализируя примеры, подобно тому, как учится человеческий мозг.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="Database" className="text-primary" size={32} />
                    </div>
                    <h3 className="font-semibold mb-2">Обучение на данных</h3>
                    <p className="text-sm text-muted-foreground">Анализирует миллионы примеров</p>
                  </CardContent>
                </Card>
                
                <Card className="border-secondary/20 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Icon name="Zap" className="text-secondary" size={32} />
                    </div>
                    <h3 className="font-semibold mb-2">Находит закономерности</h3>
                    <p className="text-sm text-muted-foreground">Выявляет скрытые паттерны</p>
                  </CardContent>
                </Card>
                
                <Card className="border-accent/20 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <Icon name="Target" className="text-accent" size={32} />
                    </div>
                    <h3 className="font-semibold mb-2">Решает задачи</h3>
                    <p className="text-sm text-muted-foreground">Применяет знания на практике</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 border-l-4 border-primary p-4 rounded">
                <p className="flex items-start gap-2">
                  <Icon name="Lightbulb" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>
                    <strong>Простая аналогия:</strong> Представьте, что вы учите ребенка различать фрукты. Показываете ему яблоки, груши, апельсины — и постепенно он учится определять их сам. Так же работает и нейросеть!
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="Rocket" className="inline mr-3 text-primary" size={36} />
            Реальные кейсы применения
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 bg-white/80 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon name={useCase.icon as any} className="text-white" size={24} />
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base mt-3">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                      <span><strong>Пример:</strong> {useCase.example}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-2">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                <Icon name="Building2" className="inline mr-3 text-secondary" size={32} />
                Где используются нейросети
              </CardTitle>
              <CardDescription className="text-center text-base">
                Искусственный интеллект уже стал частью десятков индустрий
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {industries.map((industry, index) => (
                  <div 
                    key={index} 
                    className={`${industry.color} p-6 rounded-xl flex flex-col items-center gap-3 hover:scale-105 transition-transform cursor-pointer`}
                  >
                    <Icon name={industry.icon as any} size={32} />
                    <span className="font-semibold text-center">{industry.name}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="medicine">
                    <AccordionTrigger className="text-lg font-semibold">
                      <span className="flex items-center gap-2">
                        <Icon name="Heart" className="text-red-600" size={20} />
                        Медицина: Диагностика болезней
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      Нейросети анализируют рентгеновские снимки, МРТ и КТ с точностью опытного врача. 
                      Помогают выявлять рак на ранних стадиях, предсказывают риск сердечно-сосудистых заболеваний.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="finance">
                    <AccordionTrigger className="text-lg font-semibold">
                      <span className="flex items-center gap-2">
                        <Icon name="TrendingUp" className="text-green-600" size={20} />
                        Финансы: Предотвращение мошенничества
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      Банки используют ИИ для обнаружения подозрительных транзакций в реальном времени, 
                      оценки кредитных рисков и автоматизации трейдинга.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="transport">
                    <AccordionTrigger className="text-lg font-semibold">
                      <span className="flex items-center gap-2">
                        <Icon name="Car" className="text-purple-600" size={20} />
                        Транспорт: Беспилотные автомобили
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      Tesla, Waymo и Яндекс создают автомобили, которые сами распознают дорожные знаки, 
                      пешеходов и другие машины, принимая решения за доли секунды.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">
            <Icon name="BookOpen" className="inline mr-3 text-primary" size={36} />
            Полезные материалы
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {resource.items.map((item, idx) => (
                      <li key={idx}>
                        <Button variant="ghost" className="w-full justify-start h-auto p-3 text-left hover:bg-primary/10">
                          <Icon name="ExternalLink" className="mr-2 flex-shrink-0" size={16} />
                          <span className="text-sm">{item.name}</span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <footer className="text-center py-8 border-t">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="outline" className="text-sm">
              <Icon name="Sparkles" className="mr-1" size={14} />
              Образовательный проект о нейросетях
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Создано с помощью современных технологий и искусственного интеллекта
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;