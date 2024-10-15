import { Test, TestingModule } from '@nestjs/testing';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo.entity';

/* ==== Outlining the scope of the test ==== */
describe('TodoController', () => {
  let controller: TodoController;
  let service: TodoService;

  /* ==== beforeEach runs before each test to set up necessary environment */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      //----- Creating new testing module for controller
      controllers: [TodoController],
      providers: [
        {
          provide: TodoService,

          /* ==== jest.fn() createes mocked version of the service ==== */
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<TodoController>(TodoController); // ----------- Getting the controller instance
    service = module.get<TodoService>(TodoService); //--------------------- Getting the service instance (mock service instance)
  });

  /* ==== Unit test: ensures the controller is defined ==== */
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  /* ==== Unit test: controller.findAll() => service.findAll() ==== */
  it('should return an array of todos', async () => {
    const todos: Todo[] = [//--------------------------------------------- Mock data for testing
      {
        id: 1,
        title: 'Test Todo',
        description: 'Test Description',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    jest.spyOn(service, 'findAll').mockResolvedValue(todos);//------------ mocks findAll() method 

    const result = await controller.findAll();

  /* ====  Verifying that findAll() returns the exactly the same array as the mocked service ====*/
    expect(result).toEqual(todos); 
    expect(service.findAll).toHaveBeenCalled();
  });

  /* ==== Unit test: controller.findOne() retrieves the correct todo ==== */
  it('should return a single todo by id', async () => {
    const todo = {
      id: 1,
      title: 'Test Todo',
      description: 'Test Description',
      isCompleted: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    jest.spyOn(service, 'findOne').mockResolvedValue(todo);

    const result = await controller.findOne(1);

    expect(result).toEqual(todo);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  /* ==== Unit test: controller.create() creates new todo ==== */
  it('should create a new todo', async () => {
    const createTodoDto: CreateTodoDto = {
      title: 'New Todo',
      description: 'New Description',
      isCompleted: false,
    };
    const createdTodo = {
      id: 1,
      ...createTodoDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Todo;

    jest.spyOn(service, 'create').mockResolvedValue(createdTodo);

    const result = await controller.create(createTodoDto);

    expect(result).toEqual(createdTodo);
    expect(service.create).toHaveBeenCalledWith(createTodoDto);
  });

  /* ==== Unit test: controller.update() updates the correct todo ==== */
  it('should update a todo', async () => {
    const updateTodoDto: UpdateTodoDto = {
      title: 'Updated Title',
      isCompleted: true,
    };
    const updatedTodo = {
      id: 1,
      ...updateTodoDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Todo;

    jest.spyOn(service, 'update').mockResolvedValue(updatedTodo);

    const result = await controller.update(1, updateTodoDto);

    expect(result).toEqual(updatedTodo);
    expect(service.update).toHaveBeenCalledWith(1, updateTodoDto);
  });

  /* ==== Unit test: controller.remove() deletes the correct todo ===== */
  it('should remove a todo by id', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue(undefined);

    const result = await controller.remove(1);

    expect(result).toBeUndefined();
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
