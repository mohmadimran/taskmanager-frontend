import dayjs from 'dayjs';

export function getTaskStatus(task) {
  const now = dayjs();
  const deadline = dayjs(task.deadline);
  const isDone = task.isDone;
  
  if (!isDone && now.isBefore(deadline)) return 'In Progress';
  if (isDone && now.isAfter(deadline)) return 'Achieved';
  if (!isDone && now.isAfter(deadline)) return 'Failed';
  return isDone ? 'Done' : 'In Progress';
}
